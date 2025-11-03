"use client";
import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import swal from "sweetalert";

interface User {
  name: string;
  email: string;
}

interface CommentFormProps {
  productID: string;
  user: User | null;
}


const CommentForm: React.FC<CommentFormProps> = ({ productID, user }) => {
  const [username, setUsername] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [body, setBody] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  // const [isSaveUserInfo, setIsSaveUserInfo] = useState<boolean>(false);

  const setCommentScore = (score: number) => {
    setScore(score);
    swal("Success", "Your rating has been successfully set", "success");
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setUsername(parsedUserInfo.username || "");
      setEmail(parsedUserInfo.email || "");
    }
  }, []);

  const submitComment = async () => {
    if (!username || !email || !body || !score) {
      swal("Error", "Please fill in all required fields", "error");
      return;
    }

    // if (isSaveUserInfo) {
    //   localStorage.setItem("userInfo", JSON.stringify({ username, email }));
    // }

    const comment = {
      username,
      email,
      body,
      score,
      productID,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (res.status === 201) {
      swal("Success", "Comment submitted successfully", "success");
      setBody("");
      setUsername("");
      setEmail("");
      setScore(0);

    }
  };

  return (
    <div className="w-full text-sm xs:text-base">
      <p className="font-bold mb-2 text-base sm:text-lg">Write your review</p>
      <p className="mb-4 text-xs xs:text-sm sm:text-base">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </p>

      <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mb-4 items-start xs:items-center">
        <p className="text-sm sm:text-base">Your rating:</p>
        <div className="flex gap-1 text-gray-500 text-lg xs:text-xl">
          {[5, 4, 3, 2, 1].map((s) => (
            <IoMdStar
              key={s}
              className={`cursor-pointer hover:text-orange-500 ${score >= s ? "text-orange-500" : ""
                }`}
              onClick={() => setCommentScore(s)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-2 mb-4">
        <label className="text-sm sm:text-base">
          Your comment <span className="text-red-500">*</span>
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          placeholder={user ? "Write your comment..." : "Please log in first"}
          className="w-full border border-gray-300 rounded-lg p-2 outline-none resize-none text-sm sm:text-base"
          required
        />

      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1 grid gap-2">
          <label className="text-sm sm:text-base">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={user?.name || "Enter your name"}
            value={user?.name || username}
            readOnly
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full border border-gray-300 rounded-lg p-2 outline-none text-sm sm:text-base ${user ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
          />
        </div>
        <div className="flex-1 grid gap-2">
          <label className="text-sm sm:text-base">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder={user?.email || "Enter your email"}
            value={user?.email || email}
            readOnly
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border border-gray-300 rounded-lg p-2 outline-none text-sm sm:text-base ${user ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
          />
        </div>

      </div>

      {/* <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={isSaveUserInfo}
          onChange={() => setIsSaveUserInfo(!isSaveUserInfo)}
        />
        <p className="text-xs xs:text-sm sm:text-base">
          Save my name and email for next time I comment.
        </p>
      </div> */}

      <button
        onClick={submitComment}
        className="bg-teal-600 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-teal-700 transition text-sm sm:text-base"
      >
        Submit
      </button>
    </div>
  );
};

export default CommentForm;
