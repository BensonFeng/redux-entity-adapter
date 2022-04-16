import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComments } from "./commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return <div></div>;
};

export default Comments;