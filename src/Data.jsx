import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FETCH_TODOS } from "./redux/actionTypes/actionTypes";

const Data = () => {
  useEffect(() => {
    let data = localStorage.getItem("user");
    console.log(JSON.parse(data));
  }, []);
  return (
    <div>
      <h1>Data</h1>
    </div>
  );
};

export default Data;
