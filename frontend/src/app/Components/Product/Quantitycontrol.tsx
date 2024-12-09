import React from "react";
import QuantityAjuster from "../General/QuantityAjuster";
interface ProductQuantity {
  stock: number;
  maxQuantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function Quantitycontrol({
  stock,
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
                <QuantityAjuster
                  stock={stock}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              </div>
              <div>{maxQuantity} pieces available</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
