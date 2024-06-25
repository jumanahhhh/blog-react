import React from 'react';
import BlogCard from './BlogCard';
import './Blog.css';

const blogs = [
  {
    title: 'Self Motivation Helps',
    date: '14th June',
    readTime: '2 mins read',
    imgSrc: '/path/to/image1.png', // Replace with actual image path
    link: '#'
  },
  {
    title: '3 types of dream steelers to watch out for',
    date: '31st May',
    readTime: '3 mins read',
    imgSrc: '/path/to/image2.png', // Replace with actual image path
    link: '#'
  },
  {
    title: 'The Million Dollar Question',
    date: '17th May',
    readTime: '3 mins read',
    imgSrc: '/path/to/image3.png', // Replace with actual image path
    link: '#'
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Here's a few articles that I wrote recently that can help you build a better image by yourself</p>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <button className="see-all-blogs">see all blogs →</button>
    </div>
  );
};

export default Blog;
