import { useRef, useState } from "react";

const FileUploadButton = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    // ไม่เอาสกุล
    // const file = fileInputRef.current.files[0];
    // const fileNameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
    // setFileName(fileNameWithoutExtension);
    // onFileUpload(file);
    // เอาเฉพาะ excel
    // const file = fileInputRef.current.files[0];
    // if (file && (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
    //   setFileName(file.name);
    //   onFileUpload(file);
    // } else {
    //   setFileName('');
    //   onFileUpload(null);
    // }
    // รวมร่าง
    const file = fileInputRef.current.files[0];
    if (
      file &&
      (file.type === "application/vnd.ms-excel" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    ) {
      const fileNameWithoutExtension = file.name
        .split(".")
        .slice(0, -1)
        .join(".");
      setFileName(fileNameWithoutExtension);
      onFileUpload(file);
    } else {
      setFileName("");
      onFileUpload(null);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <button className="bg-[#F37020] text-[#ffffff] font-bold px-5 py-1 rounded-[14px]" onClick={() => fileInputRef.current.click()}>Click here to upload </button>
      {fileName && <div className="w-[30px] pl-[16px]"> {fileName}</div>}
    </div>
  );
};

export default FileUploadButton;
