import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransContext } from "../context/TransContext";
import Loader from "./Loader";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-small p-2 outline-none bg-transparent text-white borer-none text-sm white-glassmorpsim"
  />
);

const SignForm = () => {
  const {
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransContext);
  console.log(currentAccount, formData);

  const handleSubmit = (e) => {
    const { addressTo, nameTo } = formData;
    e.preventDefault();
    if (!addressTo || !nameTo) return alert("Please fill all the fields");
    sendTransaction();
  };

  return (
    <div className="flex flex-col flex-auto items-center justify-center w-full mf:mt-0 mt-10">
      <div className="p-2 justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-full my-5 eth-card white-glassmorpism">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            {currentAccount ? (
              <p className="text-white font-light text-sm">
                Adress: {currentAccount}
              </p>
            ) : (
              <p className="text-white font-light text-sm">Adress</p>
            )}
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>
      <div className="p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorpism">
        <Input
          placeholder="Name"
          name="nameTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Adress To "
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <div className="h-[1px] w-full bg-gray-400 my2" />
        {isLoading ? (
          <Loader />
        ) : (
          <button
            type="botton"
            onClick={handleSubmit}
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send Now
          </button>
        )}
      </div>
    </div>
  );
};

export default SignForm;
