import React from 'react';
import './Home.css';
import ArticlePreview from './ArticlePreview';
import articles from '../data/articles';

function Home({ darkMode }) {
  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p className="intro-text">I'm Ashley Copeland, a Software Engineer sharing my thoughts and experiences through articles.</p>
      </div>
      
      <div className="articles-section">
        <h2 className="section-title">Latest Articles</h2>
        <div className="articles-container">
          {articles.map(article => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
