"use client";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Multiplebutton from "../Components/Multiplebutton";

export default function main() {
  return (
    <div>
      <div className="flex flex-col min-h-screen relative">
        <Header></Header>
        <div className="flex-1">
          <div>
            <div className="mt-[7.4375rem] transition-[margin-top] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <div className="flex flex-col mb-[4.375rem]">
                <div className="opacity-100 bg-white rounded-sm shadow-ssm mt-0 overflow-visible pt-[30px]">
                  <div>
                    {/**Banner Here */}
                    <Banner></Banner>
                    <Multiplebutton></Multiplebutton>
                  </div>
                </div>
                <div className="ml-auto mr-auto w-[1200px] opacity-100">
                  <div>
                    <div style={{ marginTop: "20px", height: "110px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
