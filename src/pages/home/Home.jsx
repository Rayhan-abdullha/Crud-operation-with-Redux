import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ERROR_POSTS,
  FETCH_POSTS,
  LOADING_POSTS,
} from "../../redux/actionTypes/actionTypes";
import Post from "../../components/post/post";

const Home = () => {
  let { posts, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch({ type: LOADING_POSTS, payload: true });
      fetchPosts()
        .then((data) => {
          localStorage.setItem("posts", JSON.stringify(data.data));
          dispatch({ type: FETCH_POSTS, payload: data.data });
        })
        .catch((e) => {
          dispatch({ type: ERROR_POSTS, payload: "Somthing went to wrong!" });
        });
    }
  }, []);

  const fetchPosts = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  if (loading) {
    return <h1 className="text-center mt-5 font-bold">Loading...</h1>;
  } else if (error) {
    return <h1 className="text-center mt-5 font-bold">{error}</h1>;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <Post />
    </div>
  );
};

export default Home;
