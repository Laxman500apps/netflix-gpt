import React from "react";

const GptSearchBox = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-start pt-30">
      <form className="text-center">
        <input
          className="w-[600px] p-3  border-2 border-white placeholder:text-white text-center font-bold rounded-3xl"
          type="text"
          placeholder="What do you wish to watch today?"
        />
      </form>
    </div>
  );
};

export default GptSearchBox;
