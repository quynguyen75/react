import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const PostsWithLoading = withLoading(Posts);

export default function HighOrderComponentExample() {
  const [status, posts] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return <PostsWithLoading status={status} posts={posts} />;
}

function Posts({ posts = [] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function withLoading(Component) {
  return ({ status, ...props }) => {
    if (status === "success") {
      return <Component {...props} />;
    }

    return <h4>Loading ...</h4>;
  };
}
