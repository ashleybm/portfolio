import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';

const ArticlePreview = ({ article }) => {
  return (
    <Link to={`article/${article.slug}`} className="article-preview-link">
      <div className="article-preview">
        <div className="article-image">
          <img src={article.coverImage} alt={article.title} />
        </div>
        <div className="article-content">
          <h3 className="article-title">{article.title}</h3>
          <p className="article-date">{article.date}</p>
          <p className="article-excerpt">{article.excerpt}</p>
          <span className="read-more-link">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreview;
