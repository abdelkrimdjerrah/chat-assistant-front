import UserItem from "../shared/UserItem";
import { DotsThree } from "phosphor-react";

const picture = require("../../../assets/Abdelkrim.png");

interface PostProps {
  createdAt: any;
}

function PostHeader({ createdAt }: PostProps) {

  const FormattedCreatedAt = new Date(createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-2 overflow-hidden">
        <div>
          <img
            src={picture}
            className="min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] rounded-full"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm ">Anounymos</p>
          <p className="text-xs font-medium text-gray-400">{FormattedCreatedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
