import ArticleList from "./ArticleList";
import { articleData } from "../data/articleData";

const Articles = () => {
  return <ArticleList articles={articleData} mainTitle="Articles" backgroundColor="#EFEBE7" />;
};

export default Articles;
