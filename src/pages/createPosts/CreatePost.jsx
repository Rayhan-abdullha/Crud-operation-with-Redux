import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { CREATE_POSTS } from "../../redux/actionTypes/actionTypes";
import axios from "axios";

export default function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const post = {
      userId: 1,
      id: shortid(),
      title: formData.text,
      body: formData.body,
    };

    const { data } = axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    dispatch({ type: CREATE_POSTS, payload: post });
    navigate("/");
  };
  return (
    <div className="create-todo">
      <div className="mt-10">
        <h1 className="text-2xl text-center bold text-white">Create Post</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center flex-col mt-8"
        >
          <input
            className="input input-bordered input-info w-full max-w-xs mb-5"
            type="text"
            placeholder="Enter post title"
            {...register("text", { required: true, min: 6 })}
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-5"
            type="text"
            placeholder="write post description"
            {...register("body", { required: true, min: 6 })}
          />
          <input
            className="cursor-pointer bg-sky-500 text-white px-5 py-2 rounded w-full max-w-xs"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
