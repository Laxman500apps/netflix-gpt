import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" mt-40 m-2 p-2">
      <h3 className="text-2xl font-bold py-2">{title}</h3>
      <p className="text-sm w-1/4 py-2 text-justify">{overview}</p>
      <div className="py-3">
        <button className="w-32 rounded-md p-2 bg-black text-white font-bold">
          Play
        </button>
        <button className="mx-3 w-32 rounded-md p-2 bg-black text-white font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
