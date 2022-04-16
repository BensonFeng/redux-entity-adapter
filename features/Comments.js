import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { fetchComments, commentsSelectors } from "./commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments()).unwrap();
  }, [dispatch]);
  // const total = useSelector(commentsSelectors.selectTotal);
  // const allComments = useSelector(commentsSelectors.selectEntities);

  // const userComments = Object.allComments.map((allComment, i) => (
  //   <h1 key={allComment.postId}>{allComment.name}</h1>
  // ));
  const replicaComments = useSelector((state) => state.comments.replica);

  return (
    <div>
      {replicaComments.map(function (listValue, index) {
        return <li key={index}>{listValue.name}</li>;
      })}
    </div>
  );
};

export default Comments;
