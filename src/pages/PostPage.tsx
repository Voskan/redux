import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchPost } from "../redux/blogSlice";
import { useSelector } from "react-redux";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const post = useSelector((state: any) => {
    return state.blog.posts.find((post: any) => post.id === id);
  });

  const loding = useSelector((state: any) => {
    return state.blog.loading;
  });

  const error = useSelector((state: any) => {
    return state.blog.error;
  });

  useEffect(() => {
    if (id && !post) {
      dispatch(fetchPost(id));
    }
  }, [dispatch, post, id]);

  let loadingElement = !post && !error ? <p>Loadin...</p> : null;
  loadingElement = loding && !error ? <p>Loadin...</p> : null;

  return (
    <MainLayout>
      {loadingElement ? (
        <>{loadingElement}</>
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.description}</p>
        </>
      )}
    </MainLayout>
  );
};

export default PostPage;
