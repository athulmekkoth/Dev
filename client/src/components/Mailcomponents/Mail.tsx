
import React, { useRef } from "react";
import { render } from "react-dom";
import EmailEditor from "react-email-editor";
import Buttongroup from "../MUI components/Buttongroup";
import { Button } from "@mui/material";
import { RootState } from "../../redux/store/store";
import { UseSelector } from "react-redux";
import { SaveData } from "../../redux/store/slices/DataSlice";
import { useAppDispatch } from "../../app/hooks";
const Example = (props) => {
  const dispatch = useAppDispatch();

  const emailEditorRef = useRef(null);

  const exportHtml = async() => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const {html } = data;
     try{
 dispatch(SaveData({content:html,title:"Mail"}))
     }
     catch(error){
       console.log(error);
     }
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div className="">
      <Button >Exit</Button>
      <div>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </div>
      <Buttongroup exportHtml={exportHtml}/>
    </div>
  );
};
export default Example;
