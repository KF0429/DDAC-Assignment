import React from "react";
interface ProductQuantity {
  quantity: number;
  maxQuantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function Quantitycontrol({
  quantity,
  maxQuantity,
  onIncrement,
  onDecrement,
}: ProductQuantity) {
  return (
    <div className="flex-col flex ">
      <div className="mb-0 pb-[15px] items-center text-[#222] flex  -ml-1 -mt-1 p-1">
        <div className="flex flex-col">
          <section className="text-[#757575] mt-4 items-center flex ">
            <h3 className="text-[#757575] flex-shrink-0 text-sm font-normal m-0 capitalize w-[110px]">
              Quantity
            </h3>
            <div className="flex items-center">
              <div style={{ marginRight: "15px" }}>
                <div className="bg-white items-center flex text-[#757575]">
                  <button
                    onClick={onDecrement}
                    className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                  >
                    <svg
                      enable-background="new 0 0 10 10"
                      viewBox="0 0 10 10"
                      x="0"
                      y="0"
                      className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                    >
                      <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                    </svg>
                  </button>
                  <input
                    className="text-[#d0011b] border-l-0 border-r-0 box-border cursor-text text-base font-normal h-8 text-center w-[50px]
                                            items-center bg-transparent border border-[rgba(0,0,0,0.09)] flex justify-center tracking-normal leading-[1] outline-none ease-sharp-motion-curve"
                    type="text"
                    value={quantity}
                  />
                  <span className="h-[1px] m-0 overflow-hidden absolute whitespace-nowrap w-[1px] z-[-1000] text-[#757575]">
                    Quantity {quantity}
                  </span>
                  <button
                    onClick={onIncrement}
                    className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                  >
                    <svg
                      enable-background="new 0 0 10 10"
                      viewBox="0 0 10 10"
                      x="0"
                      y="0"
                      className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                    >
                      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div>{maxQuantity} pieces available</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
