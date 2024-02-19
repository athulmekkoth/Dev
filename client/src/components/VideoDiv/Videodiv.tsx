import React from "react";

const Videodiv = () => {
  return (
    <div className="bg-blue md:mt-10 p-6 md:p-20   text-center w-[95%] m-auto rounded-xl mt-4">
     <div className="mb-5 leading-9">
  <h1 className="bg-blue  md:text-6xl  text-white">
    You've never had <br />
    <h1  className="text-red-500 text-2xl  md:text-6xl  bg-blue " >this experience!</h1>
  </h1>
</div>

      <div className=""> 
        <video autoPlay muted loop playsInline className="s23-app-video">
          <source
            src="https://res.cloudinary.com/superlist/video/upload/f_auto/v1701114790/website/2023/video/Website_runthrough_existing_list_niqpzo.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default Videodiv;
