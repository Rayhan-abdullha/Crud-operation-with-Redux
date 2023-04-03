import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditPost = ({ handleEdit }) => {
  const { modalData } = useSelector((state) => state);
  const [updateData, setUpdateData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    handleEdit(updateData, modalData.id);
  };

  const handleClose = () => {
    setUpdateData({ title: "", body: "" });
  };
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleUpdate} className="mt-8">
          <input
            onChange={handleChange}
            className="input input-bordered input-info w-full mb-5"
            type="text"
            name="title"
            placeholder="Enter post title"
            value={updateData.title ? updateData.title : modalData.title}
          />
          <input
            onChange={handleChange}
            className="input input-bordered input-info w-full mb-5"
            type="text"
            name="body"
            placeholder="write post description"
            value={updateData.body ? updateData.body : modalData.body}
          />
          <input
            className="cursor-pointer bg-sky-500 text-white px-5 py-2 rounded w-full"
            type="submit"
          />
        </form>
        <div className="modal-action">
          <label onClick={handleClose} htmlFor="my-modal-6" className="btn">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
