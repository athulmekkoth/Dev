import React from "react";
import { MdAdd, MdPlusOne } from "react-icons/md";
import { useState } from "react";
import FormDialog from "../components/MUI components/FormDialog";

const Write = () => {
  const [changestate, setState] = useState<boolean>(false);

  const getData = () => {
    console.log(changestate);
    setState((prev) => !prev);
  };
console.log(name)
  return (
    <div className="bg-white h-100 lg:min-h-[700px] rounded-xl">
      <div className="p-3">
        <div
          onClick={() => getData()}
          className="border-solid border-black w-fit p-7 flex items-center gap-3 shadow-2xl"
        >
          <MdAdd />
          <h1>Create New</h1>
        </div>
        <FormDialog state={changestate} setState={setState} />
      </div>
    </div>
  );
};

export default Write;
