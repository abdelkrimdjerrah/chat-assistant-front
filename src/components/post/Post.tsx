import { useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import axios from "../../api/axios";
import Text from "../shared/Text";

interface PostProps {
  postObj: Entities.IPost;
}

function Post({ postObj }: PostProps) {

  const { _id, text, createdAt } = postObj;

  return (
    <div className="w-full bg-white rounded-2xl relative p-3 py-4 sm:p-5 sm:py-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
              <PostHeader createdAt={createdAt}/>
              <Text text={text} length={140}/>
        </div>
      </div>
    </div>
  );
}

export default Post;
