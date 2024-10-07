import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post One",
      description: "A brief description of the blog post.",
    },
    {
      id: 2,
      title: "Blog Post Two",
      description: "A brief description of the blog post.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Blog</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="card h-100">
                <img
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
