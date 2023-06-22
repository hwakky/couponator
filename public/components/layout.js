import Image from "next/image";
 import  background2 from "../../assets/images/background.png";
import background from "../../assets/svg/background.svg";
export default function Layout({ children }) {
  const backgroundImage = `url("data:image/svg+xml;base64,${btoa(background)}")`;
  return (
    // <div className="w-screen h-screen bg-cover bg-center bg-[url('')]"
    <div className="w-screen h-screen bg-cover flex justify-center items-center"
    style={{
      background: `no-repeat url(${background.src})`
    }}
    >
      <div className=" w-[90%] h-[90%] bg-white rounded-[30px]">
      <main>{children}</main>
      </div>
    </div>
  );
}
