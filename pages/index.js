import Image from "next/image";
import FileUploadButton from "../public/components/uploadButton";
import SelectColumn from "../public/components/selectColumn";

export default function Home() {
  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
  };

  return (
    <div>
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center">
          <div className="font-bold text-[48px]">Couponator</div>
        </div>
        {/* <div className="flex flex-row items-center pl-[80px] pt-[40px] relative"> */}
        <div className="px-[80px] pt-[40px]">
          <div className="flex flex-row items-center gap-x-[160px] relative">
            <div className="font-bold text-[24px]">Upload Excel File</div>
            <div className="flex flex-col flex-1">
              <div className="text-[#ff0000] font-bold absolute -mt-[24px]">
                Invalid file type. Please upload again
              </div>
              <FileUploadButton onFileUpload={handleFileUpload} />
            </div>

            <div className="flex">
              <button className=" px-5 py-1 rounded-[14px] bg-[#E0E0E0] text-[#ffffff] font-bold">
                view data
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-[350px]">
            <div className=""></div>
            <div className="flex flex-col">
              <div className="text-[24px] mt-1">Select Required Columns</div>
              <SelectColumn/>
          
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
