import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToggleMode from "./ToggleMode";
import TopDrawer from "./TopDrawer";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import Search from "../Search/Search";
import logo from "../../images/shaunjacks-logo-light-192px.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

interface MobileNavMenuProps {
  siteTitle: string;
  menuLinks: { url: string; name: string }[];
}

export default function MobileNavMenu({
  siteTitle,
  menuLinks,
}: MobileNavMenuProps) {
  const [isOpen, setOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      sx={{
        display: `flex`,
        justifyContent: isSearchOpen ? `flex-start` : `space-between`,
        alignItems: `center`,
        maxWidth: `container`,
        height: "100%",
        my: "auto",
        mr: 3,
      }}
    >
      <TopDrawer
        menuLinks={menuLinks}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        navHeight="45px"
      />
      <div
        sx={
          !isSearchOpen
            ? { flex: 1, mr: 1, height: "100%" }
            : { width: "45px", mr: 3, height: "100%" }
        }
      >
        <HamburgerIcon toggleOpen={toggleOpen} />
      </div>
      {!isSearchOpen && (
        <Link to="/">
          <img src={logo} width="35" height="35" />
        </Link>
      )}
      <div
        sx={{
          flex: "1",
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Search
          focus={isSearchOpen}
          setFocus={setIsSearchOpen}
          setMobileNavOpen={setOpen}
        />
      </div>
    </div>
  );
}
