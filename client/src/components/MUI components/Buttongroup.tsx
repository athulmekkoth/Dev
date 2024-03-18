import React from "react";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import SaveAsIcon from '@mui/icons-material/SaveAs'
interface Functionprops{
    exportHtml:()=>void
}
const Buttongroup = ({exportHtml}:Functionprops) => {
  return (
    <div className="flex flex-row justify-end p-7 gap-5">
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button onClick={exportHtml} variant="contained" endIcon={<SaveAsIcon />}>
        Save
      </Button>
    </div>
  );
};

export default Buttongroup;
