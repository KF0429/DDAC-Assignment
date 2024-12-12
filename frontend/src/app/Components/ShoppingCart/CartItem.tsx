import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  cartItems: {
    productID: number;
    productName: string;
    photo: string;
    quantity: number;
    unitPrice: number;
    subTotal: number;
    shopName: string;
  }[];
  userID: number;
}
export default function CartItem({
  cartItems: initialCartItems,
  userID,
}: CartItemProps) {
  const [cartItems, setItems] = useState(initialCartItems);

  const handleDelete = async (productID: number) => {
    try {
      const response = await fetch(
        `http://localhost:5088/api/Carts/${userID}/${productID}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setItems((prevItems) =>
        prevItems.filter((item) => item.productID !== productID)
      );
    } catch (error) {
      console.error("Error in delete item", error);
    }
  };
  const [checkedItems, setCheckedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const [stockData, setStockData] = useState<{ [key: number]: number }>({});
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => {
      acc[item.productID] = item.quantity;
      return acc;
    }, {} as { [key: number]: number })
  );

  const router = useRouter();
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockPromises = cartItems.map(async (item) => {
          const response = await fetch(
            `http://localhost:5088/api/Products/with-seller/${item.productID}`
          );
          const product = await response.json();
          return { productID: item.productID, stock: product.stock };
        });
        const stockResults = await Promise.all(stockPromises);
        const stockMap = stockResults.reduce((acc, item) => {
          acc[item.productID] = item.stock;
          return acc;
        }, {} as { [key: number]: number });
        setStockData(stockMap);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchStockData();
  }, [cartItems]);

  const updateQuantity = async (productID: number, newQuantity: number) => {
    try {
      const response = await fetch(
        `http://localhost:5088/api/Carts/updateQuantity`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productID, quantity: newQuantity }),
        }
      );
      if (!response.ok) throw new Error("Failed to update quantity");

      setQuantities((prev) => ({
        ...prev,
        [productID]: newQuantity,
      }));
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleIncrement = (productID: number) => {
    const currentQuantity = quantities[productID];
    const maxStock = stockData[productID] || 0;

    if (currentQuantity < maxStock) {
      updateQuantity(productID, currentQuantity + 1);
    }
  };

  const handleDecrement = (productID: number) => {
    const currentQuantity = quantities[productID];

    if (currentQuantity > 1) {
      updateQuantity(productID, currentQuantity - 1);
    }
  };
  const isAllSelected =
    cartItems.length > 0 &&
    cartItems.every((item) => checkedItems[item.productID]);

  const handleSelectAll = () => {
    const newState = !isAllSelected;
    const updatedCheckedItems = cartItems.reduce((acc, item) => {
      acc[item.productID] = newState;
      return acc;
    }, {} as { [key: number]: boolean });
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckBoxChange = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const subtotal = cartItems.reduce((total, item) => {
    if (checkedItems[item.productID]) {
      return total + item.unitPrice * item.quantity;
    }
    return total;
  }, 0);

  const handleCheckoutPage = () => {
    const selectedItems = cartItems.filter(
      (item) => checkedItems[item.productID]
    );
    const encodedItems = encodeURIComponent(JSON.stringify(selectedItems));
    router.push(`/checkout?items=${encodedItems}`);
  };
  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);
  return (
    <div>
      <main
        style={{ marginBottom: "0px" }}
        className="text-[rgba(0,0,0,.8)] flex flex-col pt-5"
      >
        <div
          className="items-center bg-white rounded-[3px] shadow-ssm text-[#888] flex
                        text-sm h-[55px] mb-3 overflow-hidden py-0 px-5"
        >
          <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
            <label
              className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
            >
              <input //when this check box is click it will click all checkbox
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                aria-checked="false"
                aria-label="click here to select all items"
                className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0 peer hidden"
              />
              <div
                className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
            mr-2 relative text-center select-none w-4 peer-checked:bg-[#ee4d2d]"
              >
                <div
                  className="absolute w-[9px] h-[5px] border-l-2 border-b-2 border-white 
                                    transform rotate-[-45deg] top-[3px] left-[3px] 
                                    peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
            </label>
          </div>
          <div className="text-[rgba(0,0,0,.8)] w-[46.27949%]">Product</div>
          <div className="text-center w-[15.88022%]">Unit Price</div>
          <div className="text-center w-[15.4265%]">Quantity</div>
          <div className="text-center w-[10.43557%]">Total Price</div>
          <div className="text-center w-[12.70417%]">Actions</div>
        </div>
        {cartItems.map((item) => (
          <section
            key={item.productID} //cartid
            className="bg-white rounded-sm shadow-ssm overflow-visible mb-[.9375rem] block"
          >
            <div className="border-b border-[rgba(0,0,0,.09)] box-border h-[3.75rem] py-0 px-5 items-center flex">
              <div className="items-center flex flex-1">
                <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
                  <label
                    className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
                  >
                    <input
                      type="checkbox" // when this check box is clicked it will click all the check box inside this section
                      checked={!!checkedItems[item.productID]} //cartid
                      onChange={() => handleCheckBoxChange(item.productID)} //cartid
                      aria-checked="false"
                      className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0 peer hidden"
                    />
                    <div
                      className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
            mr-2 relative text-center select-none w-4 peer-checked:bg-[#ee4d2d]"
                    >
                      <div
                        className="absolute w-[9px] h-[5px] border-l-2 border-b-2 border-white 
                                    transform rotate-[-45deg] top-[3px] left-[3px] 
                                    peer-checked:opacity-100 transition-opacity"
                      ></div>
                    </div>
                  </label>
                </div>
                <Link
                  className="items-center text-[rgba(0,0,0,.87)] flex font-bold min-w-[50px] no-underline cursor-pointer"
                  href={""}
                >
                  <span style={{ marginLeft: "10px" }}>Apple Malaysia</span>
                </Link>
              </div>
            </div>
            <section className="pb-[1px] relative block" role="list">
              <div className="border border-[rgba(0,0,0,.09)] rounded-sm my-[22px] mx-5">
                <div
                  className="pb-5 pt-[15px] text-[rgba(0,0,0,.87)] block mt-[15px] px-5 no-underline"
                  role="listitem"
                >
                  <div className="items-center flex">
                    <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
                      <label
                        className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
                      >
                        <input
                          type="checkbox" //you miss here the prev checkbox will trigger this. and he is only checked its self if click here
                          aria-checked="false"
                          checked={!!checkedItems[item.productID]}
                          onChange={() => handleCheckBoxChange(item.productID)}
                          className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0 peer hidden"
                        />
                        <div
                          className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
                                  mr-2 relative text-center select-none w-4 peer-checked:bg-[#ee4d2d]"
                        >
                          <div
                            className="absolute w-[9px] h-[5px] border-l-2 border-b-2 border-white 
                                    transform rotate-[-45deg] top-[3px] left-[3px] 
                                    peer-checked:opacity-100 transition-opacity"
                          ></div>
                        </div>
                      </label>
                    </div>
                    <div className="flex box-border flex-col relative w-[29.03811%]">
                      <div className="flex">
                        {/**ProductImage */}
                        <Link
                          className="cursor-pointer bg-[initial] no-underline"
                          href={""}
                        >
                          <picture className="contents cursor-pointer">
                            <Image
                              src={item.photo}
                              height={80}
                              width={80}
                              alt="productimage"
                            ></Image>
                          </picture>
                        </Link>
                        <div className="leading-4 overflow-hidden flex flex-1 flex-col text-sm pt-[5px] pr-5 pb-0 pl-[10px]">
                          {/**product Name */}
                          <Link href={""}>{item.productName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-center w-[17.24138%]">
                      show condition
                    </div>
                    <div className="flex-col w-[15.88022%] items-center flex justify-center">
                      <span className="m-0">RM {item.unitPrice}</span>
                    </div>
                    <div className="items-center flex flex-col justify-center w-[15.4265%]">
                      {/**Quantity Ajuster */}
                      <div className="bg-white items-center flex text-[#757575]">
                        <button
                          onClick={() => handleIncrement(item.productID)}
                          className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                        >
                          <svg
                            enableBackground="new 0 0 10 10"
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
                          value={quantities[item.productID]}
                          readOnly
                        />
                        <button
                          onClick={() => handleDecrement(item.productID)}
                          className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                        >
                          <svg
                            enableBackground="new 0 0 10 10"
                            viewBox="0 0 10 10"
                            x="0"
                            y="0"
                            className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                          >
                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                          </svg>
                        </button>
                      </div>
                      <div className="text-[#ee4d2d] text-[.8125rem] mt-[.3125rem]">
                        {stockData[item.productID]} items left
                      </div>
                    </div>
                    <div className="items-center flex justify-center text-[#ee4d2d] w-[10.43557%]">
                      <span>
                        RM {(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex-col capitalize w-[12.70417%] items-center flex justify-center">
                      <button
                        onClick={() => handleDelete(item.productID)}
                        className="bg-none border-0 cursor-pointer normal-case overflow-visible m-0 text-inherit focus:text-[#ee4d2d] hover:text-[#ee4d2d]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        ))}
      </main>
      <section
        className="bottom-0 sticky z-[2] items-center bg-white box-border grid grid-cols-[1fr_20.3125rem_11.875rem] text-base
                        mt-3 w-full before:rounded-none before:transition-colors before:duration-100 before:ease-[cubic-bezier(.4,0,.6,1)]"
      >
        <div className="col-end-4 col-start-1 py-3 px-0 items-center flex w-full">
          <div className="box-border flex flex-row-reverse min-w-[58px] pt-0 pr-3 pb-0 pl-5">
            <label className="items-center text-[rgba(0,0,0,.54)] cursor-default flex text-[12px] font-light max-w-[400px] relative">
              <input
                type="checkbox"
                tabIndex={0}
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="box-border p-0 left-0 opacity-0 absolute top-0 m-0 peer hidden"
              />
              <div
                className="border border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0_rgba(0,0,0.02)] flex-shrink-0 h-4 
                                mr-2 relative text-center select-none w-4 peer-checked:bg-[#ee4d2d] peer-checked:border-[#ee4d2d] after:hover:shadow-none"
              >
                <div
                  className="absolute w-[9px] h-[5px] border-l-2 border-b-2 border-white 
                      transform rotate-[-45deg] top-[3px] left-[3px] 
                      peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
            </label>
          </div>
          <button className="cursor-pointer bg-transparent border-0 normal-case overflow-visible m-0">
            Select All
          </button>
          <button className="my-0 mx-2 bg-transparent border-0 normal-case overflow-visible"></button>
          <div className="flex-1"></div>
          <div className="flex flex-col">
            <div className="relative" tabIndex={0}>
              <div role="button">
                <div className="flex justify-end items-center">
                  <div className="items-center flex ml-5"></div>
                  <div className="ml-2">
                    <div className="text-[#222] text-base leading-[19px]">
                      Total (
                      {
                        Object.values(checkedItems).filter(
                          (isChecked) => isChecked
                        ).length
                      }{" "}
                      item
                      {Object.values(checkedItems).filter(
                        (isChecked) => isChecked
                      ).length === 1
                        ? ""
                        : "s"}{" "}
                      ):
                    </div>
                    <div className="text-[#ee4d2d] text-2xl leading-7 ml-[5px]">
                      RM {subtotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleCheckoutPage}
            disabled={
              !Object.values(checkedItems).some((isChecked) => isChecked)
            }
            className={`rounded-sm box-border text-sm font-light h-10 my-0 mr-[22px] ml-[15px] 
                        py-[13px] px-9 capitalize w-[13.125rem] outline-0 overflow-visible relative border-0
                        shadow-ssm cursor-pointer flex justify-center tracking-normal leading-[1] select-none
                        transition-opacity duration-200 ease-in-out ${
                          Object.values(checkedItems).some(
                            (isChecked) => isChecked
                          )
                            ? "bg-[#ee4d2d] text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
          >
            <span className="w-full text-sm font-light capitalize text-white cursor-pointer tracking-normal leading-[1] select-none">
              Check Out
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
