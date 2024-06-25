import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.imgSrc} alt={blog.title} />
      <div className="blog-info">
        <h2>{blog.title}</h2>
        <p>{blog.readTime} — {blog.date}</p>
        <a href={blog.link}>read article →</a>
      </div>
    </div>
  );
};

export default BlogCard;
