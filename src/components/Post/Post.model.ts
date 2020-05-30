export interface PostListingProps {
  postEdges: PostEdge[];
}

export interface PostProps {
  post: Post;
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

export interface PostNode {
  fields: PostFields;
  excerpt: string;
  timeToRead: string;
  frontmatter: PostFrontmatter;
  cover: any;
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

export interface PostTagProps {
  tag: string;
  index: number;
  length: number;
}
