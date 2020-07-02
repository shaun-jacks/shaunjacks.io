/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState(``);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      {
        rootMargin: rootMargin || `0% 0% -80% 0%`,
      }
    );

    itemIds.forEach((id) => {
      const el = document.getElementById(id);
      observer.observe(el);
    });

    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, []);

  return activeHash;
};

const getHeadingIds = (
  toc,
  traverseFullDepth = true,
  depth,
  recursionDepth = 1
) => {
  const idList = [];
  const hashToId = (str) => str.slice(1);

  if (toc) {
    toc.forEach((item) => {
      // Sometimes url does not exist on item. See #19851
      if (item.url) {
        idList.push(hashToId(item.url));
      }

      // Only traverse sub-items if specified (they are not displayed in ToC)
      // recursion depth should only go up to 6 headings deep and may come in as
      // undefined if not set in the tableOfContentsDepth frontmatter field
      if (item.items && traverseFullDepth && recursionDepth < (depth || 6)) {
        idList.push(
          ...getHeadingIds(item.items, true, depth, recursionDepth + 1)
        );
      }
    });
  }

  return idList;
};

function isUnderDepthLimit(depth, maxDepth = false) {
  return maxDepth ? depth < maxDepth : false;
}

// depth and maxDepth are used to figure out how many bullets deep to render in the ToC sidebar, if no
// max depth is set via the tableOfContentsDepth field in the frontmatter, all headings will be rendered
function createItems(
  items,
  location,
  depth,
  maxDepth,
  activeHash,
  isDesktop,
  toggleOpen
) {
  return (
    items &&
    items.map((item, index) => {
      const isActive = item.url === `#${activeHash}`;
      return (
        <li
          data-testid={item.url || ``}
          sx={{ fontSize: 1, mt: 3 }}
          key={location + (item.url || depth + `-` + index)}
          onClick={toggleOpen}
        >
          {item.url && (
            <div
              sx={{
                pl: isActive ? 2 : 0,
                borderLeft: (t) =>
                  isActive ? `3px solid ${t.colors.primary}` : `none`,
              }}
            >
              <Link
                sx={{
                  "&&": {
                    color: isActive ? `primary` : `textMuted`,
                    border: 0,
                    textDecoration: "none",
                    ":hover": {
                      color: `primary`,
                    },
                  },
                }}
                to={location + item.url}
              >
                {item.title}
              </Link>
            </div>
          )}
          {item.items && isUnderDepthLimit(depth, maxDepth) && (
            <ul sx={{ color: `text`, listStyle: `none`, ml: 4, pl: 0, mt: 3 }}>
              {createItems(
                item.items,
                location,
                depth + 1,
                maxDepth,
                activeHash,
                isDesktop
              )}
            </ul>
          )}
        </li>
      );
    })
  );
}

function TableOfContents({ items, depth, location, toggleOpen }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const activeHash = useActiveHash(getHeadingIds(items, true, depth));

  return items ? (
    <nav
      sx={{
        mb: [0, null, null, null, null, 0],
        pb: [0, null, null, null, null, 0],
      }}
    >
      <h2
        sx={{
          color: `text`,
          fontSize: 1,
          letterSpacing: `tracked`,
          mt: 0,
          textTransform: `uppercase`,
        }}
      >
        Table of Contents
      </h2>
      <ul
        sx={{
          listStyle: `none`,
          m: 0,
        }}
      >
        {createItems(
          items,
          location,
          1,
          depth,
          activeHash,
          isDesktop,
          toggleOpen
        )}
      </ul>
    </nav>
  ) : null;
}

export default TableOfContents;
