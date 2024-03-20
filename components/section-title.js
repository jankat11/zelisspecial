import Link from "next/link";

const SectionTitle = ({ first, second, classes, third, link }) => {
  return (
    <div
      className={`font-raleway w-full underline sm:w-fit whitespace-nowrap ${
        third && "flex sm:block justify-between"
      } ${classes}`}
    >
      <Link
         href={link ? link : "#"}
        className={`${
          third ? "flex flex-col gap-2 sm:inline" : "flex items-center"
        }`}
      >
        <span className={`${third && "hidden sm:inline"} `}>{first}</span>{" "}
        {second && (
          <span
            className={`text-letter/60 text-2xl px-2 relative top-[1px] ${
              third && "hidden sm:inline"
            }`}
          >
            
          </span>
        )}
        <span className="">{second}</span>
      </Link>
        
      {third && (
        
      
          <span className="px-2 relative bottom-[2px] right-[2px] text-xs tracking-widest font-medium underline">
            {"bir mutfak masalı"}
          </span>
      )}
    </div>
  );
};
export default SectionTitle;
