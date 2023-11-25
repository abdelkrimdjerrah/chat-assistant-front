import { useEffect, useState } from "react";
import { House, XCircle } from "phosphor-react";
import Input from "../shared/Input";
import ButtonSecondary from "../shared/ButtonSecondary";
import axios from "../../api/axios";
import Loader from "../shared/Loader";
import Textarea from "../shared/Textarea";

function AddPost() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isPosted, setIsPosted] = useState(false);


  const handleAddPost = async () => {
    try {
      setLoading(true);
      if (!text) {
        setIsError("Please write something");
        return;
      }
      setIsError("");

      const { data } = await axios.post(`/api/posts`, text)

      if (!data?.success) {
        setIsError(data?.message);
        return;
      }
      setIsPosted(true);

    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full bg-white rounded-2xl relative px-3 py-4 sm:p-5 sm:py-6 ">
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 w-full">
          <House size={21} />
          <p className="text-sm font-medium">Add post</p>
        </div>
        {isPosted && (
          <>
            <p className="text-sm text-green-500">Post added successfully!</p>
          </>
        )}
        {isError && (
          <>
            <p className="text-sm text-red-500">{isError}</p>
          </>
        )}
        <Textarea
          text="Write a text ..."
          type="text"
          widthFull
          onClick={() => setIsPosted(false)}
          onChange={(v) => setText(v)}
          value={text}
          rows={4}
          className="py-2 text-xs w-[250px]"
        />
        <div className="flex gap-2 items-center">
          <ButtonSecondary onClick={handleAddPost} color="orange">
            Add post
          </ButtonSecondary>
          {loading && (
            <>
              <Loader />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddPost;
