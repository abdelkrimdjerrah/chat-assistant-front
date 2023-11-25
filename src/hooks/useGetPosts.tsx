import { useEffect, useState } from "react";
import axios from "../api/axios";

function useGetPosts<PostType extends Entities.IPost[]>() {

  const [posts, setPosts] = useState<PostType>();

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();

  }, [axios]);

  return posts;
}

export default useGetPosts;
