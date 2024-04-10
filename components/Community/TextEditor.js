import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function TextEditor({ GetContent }) {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const [value, setValue] = useState("");
  const SaveContent = (value) => {
    setValue(value);
    GetContent(value);
    console.log(value);
  }

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="내용을 입력해주세요"
      value={value}
      onChange={SaveContent}
    />
  );
}
