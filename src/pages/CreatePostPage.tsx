import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { createPost, fetchPosts } from "../redux/blogSlice";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string>("");

  const dispatch = useAppDispatch();

  const loding = useSelector((state: any) => {
    return state.blog.loading;
  });

  const error = useSelector((state: any) => {
    return state.blog.error;
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const type = e.target.files[0].type;
      if (
        type !== "image/jpeg" &&
        type !== "image/png" &&
        type !== "image/gif" &&
        type !== "image/svg" &&
        type !== "image/jpg"
      ) {
        return setImageError("Image type error");
      } else {
        setImage(e.target.files[0]);
        setImageError("");
      }
    }
  };

  const handleCreatePost = () => {
    dispatch(
      createPost({
        createAt: new Date().toISOString(),
        title,
        description,
        image,
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
          <input type="file" onChange={handleImageChange} />
        </div>
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
          {imageError ? <p style={{ color: "red" }}>{imageError}</p> : null}
          <button
            onClick={handleCreatePost}
            disabled={imageError ? true : false}
          >
            Create Post
          </button>
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
