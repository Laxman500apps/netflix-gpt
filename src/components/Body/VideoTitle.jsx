import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" mt-40 m-2 py-14 px-10 absolute">
      <h3 className="text-3xl text-white font-bold py-2">{title}</h3>
      <p className="text-sm text-white w-1/4 py-2 text-justify">{overview}</p>
      <div className="py-3">
        <button className="w-32 rounded-md p-2 bg-white text-black font-bold hover:bg-white/80">
          Play
        </button>
        <button className="mx-3 w-32 rounded-md p-2 bg-gray-500 text-white font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
