import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import articles from '../data/articles';
import './Article.css';

const Article = ({ darkMode }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the article that matches the slug
  const article = articles.find(article => article.slug === slug);
  
  // If article not found, redirect to home page
  useEffect(() => {
    if (!article) {
      navigate('/');
    }
  }, [article, navigate]);
  
  // If article is not found and we're still on this page, show loading
  if (!article) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className={`article-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-date">{article.date}</p>
      </div>
      
      <div className="article-cover">
        <img src={article.coverImage} alt={article.title} />
      </div>
      
      <div className="article-body">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      
      <div className="article-footer">
        <Link to="/" className="back-button">
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
};

export default Article;
