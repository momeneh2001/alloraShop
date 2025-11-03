import { FaRegStar, FaStar } from "react-icons/fa";

interface CommentProps {
  username: string;
  body: string;
  score: number  
  date: string;
  isAccept:boolean;
}

const Comment: React.FC<CommentProps> = ({ username, body, score, date }) => {
  const validScore = typeof score === "number" && !isNaN(score) ? Math.max(0, Math.min(score, 5)) : 0;

  return (
    <section className="flex flex-col sm:flex-row gap-3 sm:gap-5 p-4 sm:p-5 md:p-6 border-b border-gray-200 rounded-lg">
      {/* Avatar */}
      <img
        src="/images/Admin.webp"
        className="w-10 h-10 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto sm:mx-0"
        alt="User Avatar"
      />

      {/* Comment content */}
      <div className="flex-1">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-2">
          <div>
            <strong className="block text-gray-800 text-base sm:text-lg md:text-xl">
              {username}
            </strong>
            <p className="text-gray-500 text-xs sm:text-sm">
              {new Date(date).toLocaleDateString("en-US")}
            </p>
          </div>

          <div className="flex text-yellow-400 text-lg mt-2 xs:mt-0">
            {[...Array(validScore)].map((_, index) => (
              <FaStar key={index} />
            ))}
            {[...Array(5 - validScore)].map((_, index) => (
              <FaRegStar key={index} />
            ))}
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          {body}
        </p>
      </div>
      
    </section>
  );
};

export default Comment;
