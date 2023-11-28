import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { createPost, fetchPosts } from "../redux/blogSlice";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();

  const loding = useSelector((state: any) => {
    return state.blog.loading;
  });

  const error = useSelector((state: any) => {
    return state.blog.error;
  });

  const handleCreatePost = () => {
    dispatch(
      createPost({
        createAt: new Date().toISOString(),
        title,
        description,
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
    <MainLayout>
      <h1>Create new Post</h1>
      <div>
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="post title"
            value={title}
          />
        </div>
        <div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="post description"
            value={description}
          ></textarea>
        </div>
        <div>
          <button onClick={handleCreatePost}>Create Post</button>
        </div>
      </div>
      <div>{error ? <p>{error}</p> : null}</div>
      <div>
        <Link to={"/"}>Go to Home Page</Link>
      </div>
    </MainLayout>
  );
};

export default CreatePostPage;
