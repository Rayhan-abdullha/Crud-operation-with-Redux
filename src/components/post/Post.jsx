import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_POSTS,
  FETCH_POSTS,
  SEND_DATA_MODAL,
  UPDATE_POSTS,
} from "../../redux/actionTypes/actionTypes";
import EditPost from "../modal/EditPost";
import axios from "axios";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  const handleDelete = (id) => {
    const post = posts.filter((item) => item.id !== id);
    dispatch({ type: DELETE_POSTS, payload: post });
  };

  const handleEdit = async (updateData, id) => {
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      updateData
    );
    const newData = posts.map((item) => {
      if (item.id === id) {
        item.title = updateData.title || item.title;
        item.body = updateData.body || item.body;
        return item;
      }
      return item;
    });
    dispatch({ type: UPDATE_POSTS, payload: newData });
  };

  const modalHandle = (data) => {
    dispatch({ type: SEND_DATA_MODAL, payload: data });
  };

  useEffect(() => {});
  // useEffect(() => {
  //   if (posts.length === 0) {
  //     let getPosts = localStorage.getItem("post");
  //     dispatch({ type: FETCH_POSTS, payload: JSON.parse(getPosts) });
  //   }
  // }, []);
  return (
    <div className="all-post mt-12 grid xl:grid-cols-3 md:grid-cols-2 gap-4">
      {posts?.map((item) => (
        <div key={item.id} className="single-post rounded border p-3">
          <div className="post-info mb-3">
            <h2
              style={{ color: "azure" }}
              className="text-2xl mb-3 capitalize bold"
            >
              {item.title}
            </h2>
            <p>{item.body}</p>
          </div>

          <div className="post-title flex items-center justify-between">
            <button
              onClick={() => handleDelete(item.id)}
              className="px-2 py-1 rounded bg-red-800 text-white"
            >
              Delete
            </button>
            <label
              onClick={() => modalHandle(item)}
              htmlFor="my-modal-6"
              className="btn"
            >
              Edit
            </label>
          </div>
        </div>
      ))}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <EditPost handleEdit={handleEdit} true />
    </div>
  );
};

export default Post;
