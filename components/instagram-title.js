import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const InstagramTitle = ({ classes, handleClose, type }) => {
  return (
    <div className={`mt-0 ml-0 lg:border-b p-3 ${classes}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <a
            href={
              type === "youtube"
                ? "https://www.youtube.com/@zelismutfakta8546"
                : "https://www.instagram.com/zelisspecial"
            }
            target="_blank"
            className="flex items-center gap-4"
          >
            <div className="border p-2 rounded-full">
              {type === "youtube" ? (
                <FaYoutube fill="black" size={30} />
              ) : (
                <FaInstagram fill="black" size={30} />
              )}
            </div>
            <p className="text-black tracking-wider font-medium cursor-pointer">
              zelisspecial
            </p>
          </a>
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleClose} className="mr-2">
            <MdClose fill="gray" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default InstagramTitle;
