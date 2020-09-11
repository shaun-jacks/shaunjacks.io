export interface PostListingProps {
  postEdges: PostEdge[];
}

export interface PostProps {
  post: Post;
  dimensions?: string;
}

export interface Post {
  id?: string;
  categoryId?: string;
  path: string;
  tags: string[];
  cover: any;
  title: string;
  date: string;
  excerpt: string;
  timeToRead: string;
  category: string;
}

export interface PostEdge {
  node: PostNode;
}

export interface TocNode {
  items: TocNode;
  url: string;
  name: string;
}

export interface PostNode {
  fields: PostFields;
  excerpt: string;
  timeToRead: string;
  frontmatter: PostFrontmatter;
  cover: any;
  tableOfContents?: TocNode;
}

export interface PostFields {
  slug: string;
  date: string;
}

export interface PostFrontmatter {
  tags: string[];
  cover: any;
  title: string;
  category: string;
  date?: string;
}
