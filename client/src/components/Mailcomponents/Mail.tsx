
import React, { useRef } from "react";
import { render } from "react-dom";
import EmailEditor from "react-email-editor";
import Buttongroup from "../MUI components/Buttongroup";
import { Button } from "@mui/material";

const Example = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
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
