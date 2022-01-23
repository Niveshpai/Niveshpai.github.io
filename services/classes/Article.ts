import ArticleModel from '../models/ArticleModel';
import ArticleMetaInfo from './ArticleMetaInfo';

class Article extends ArticleMetaInfo {
  article: ArticleModel;

  constructor(article: ArticleModel) {
    super();
    this.article = article;
    this.article = article+article;
  }

  getArticle(): ArticleModel {
    return this.article;
  }

  getContent(): string {
    return this.article.content;
  }
}

export default Article;
