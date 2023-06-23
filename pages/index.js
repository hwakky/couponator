import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import dynamic from "next/dynamic";
import SelectColumn from "../public/components/selectColumn";

const FileUploadButtonNoSSR = dynamic(
  () => import("../public/components/uploadButton"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [message, setMessage] = useState("");
  const maxLength = 250;

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setMessage(inputValue);
    }
  };
  const reminingCharacter = maxLength - message.length;
  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
  };

  const counterClassName = classNames({
    "text-gray-400": reminingCharacter > 0,
    "text-red-500": reminingCharacter === 0,
  });

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

  return (
    <div className=" w-[90%] h-[90%] bg-white rounded-[30px]">
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center">
          <div className="font-bold text-[48px]">Couponator</div>
        </div>
        {/* <div className="flex flex-row items-center pl-[80px] pt-[40px] relative"> */}
        <div className="px-[80px] pt-[40px]">
          <div className="flex flex-row items-center gap-x-[160px] relative">
            <div className="font-bold text-[24px]">Upload Excel File</div>
            <div className="flex flex-col flex-1">
              {/* <div className="text-[#ff0000] font-bold absolute -mt-[24px]">
                Invalid file type. Please upload again
              </div> */}
              <FileUploadButtonNoSSR onFileUpload={handleFileUpload} />
            </div>
          </div>
          {/* set 2 */}
          <div className="flex flex-row gap-x-[350px]">
            <div className=""></div>
            <div className="flex flex-col">
              <div className="text-[24px] mt-1">Select Required Columns</div>
              <SelectColumn />
            </div>
          </div>
        </div>
        <div className="px-[80px] pt-[40px]">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row  gap-x-[185px]">
              <div className="font-bold text-[24px]">Input Message</div>
              <div className="relative mt-1">
                <textarea
                  className="w-[500px] border-[2px] border-[#000000] rounded-md px-2 resize-none"
                  name="message"
                  rows="6"
                  cols="50"
                  อ
                  value={message}
                  onChange={handleChange}
                  placeholder="Please input message pattern..."
                ></textarea>
                <div className="absolute bottom-2 right-2">
                  <div className={counterClassName}>{reminingCharacter}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-5 py-1 rounded-[14px] bg-[#E0E0E0] text-[#ffffff] font-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
