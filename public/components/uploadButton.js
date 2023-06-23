import { useRef, useState } from "react";

const FileUploadButton = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    if (
      file &&
      (file.type === "application/vnd.ms-excel" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    ) {
      // const fileNameWithoutExtension = file.name
      //   .split(".")
      //   .slice(0, -1)
      //   .join(".");
      setFileName(file.name);
      const data = [
        {
          customer_Name: "Skylar Custis",
          discount_Code: "abcdef",
          email: "trin@gmail.com",
          phoneNum: "0818888888",
        },
        {
          customer_Name: "Custis Skylar",
          discount_Code: "abcdef",
          email: "trin@gmail.com",
          phoneNum: "0818888888",
        },
      ];
      onFileUpload(file);
    } else {
      setFileName("");
      onFileUpload(null);
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex items-center">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button
          className="bg-[#F37020] text-[#ffffff] font-bold px-5 py-1 rounded-[14px]"
          onClick={() => fileInputRef.current.click()}
        >
          Click here to upload{" "}
        </button>
        {fileName && (
          <div className="w-[30px] pl-[16px]"> {fileName.slice(0, -5)}</div>
        )}
      </div>
      <div className="flex">
        <button
          className={`px-5 py-1 rounded-[14px] ${
            fileName === "" ? "bg-[#E0E0E0]" : "bg-[#F37020]"
          } text-[#ffffff] font-bold`}
          disabled={true}
        >
          view data
        </button>
      </div>
    </div>
  );
};

export default FileUploadButton;
