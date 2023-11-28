import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createPost, fetchPosts } from "../redux/blogSlice";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: any) => {
    return state.blog.posts;
  });

  const loding = useSelector((state: any) => {
    return state.blog.loading;
  });

  const error = useSelector((state: any) => {
    return state.blog.error;
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1>HomePage</h1>
      {loding ? <h3>Loading.....</h3> : null}
      {!loding && posts
        ? posts.map((post: any) => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <Link to={`/article/${post.id}`}>Read More</Link>
              </div>
            );
          })
        : null}
    </MainLayout>
  );
};

export default HomePage;
