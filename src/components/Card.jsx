import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion, scale } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative w-60 h-72 rounded-[30px] bg-zinc-900 text-white py-8 px-6 overflow-hidden shrink-0"
    >
      <FaRegFileLines />
      <p className="text-[16px] mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0  w-full">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-sky-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose size="1.5em" color="#000" />
            ) : (
              <LuDownload size="0.9em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}
          >
            <h3 className="text-md">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
