import { PostEdge } from "../components/Post/Post.model";

export interface BlogProps {
  data: {
    allMdx: IndexEdges;
  };
}

export interface IndexProps {
  data: {
    mostRecent: IndexEdges;
    mostPopular: IndexEdges;
  };
}

export interface IndexEdges {
  edges: PostEdge[];
}
