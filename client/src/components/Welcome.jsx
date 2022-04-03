import React, { useContext } from "react";
import { TransContext } from "../context/TransContext";

// payable false ise localhost/walletAddress e gidecek
// true ise localhost/profile e gidecek

const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(TransContext);
  console.log(currentAccount);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] "
            >
              <p className="text-white text-base font-semibold ">
                Connect Wallet
              </p>
            </button>
          ) : (
            <p className="text-white text-base font-semibold ">
              Current Account: {currentAccount}
            </p>
          )}
          <div className="text-gray-600 grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className="rounded-tl-2xl">Reliability</div>
            <div>Security</div>
            <div className="sm:rounded-tr-2xl">Ethereum</div>
            <div className="sm:rounded-bl-2xl">Web 3.0</div>
            <div>Low Fees</div>
            <div className="rounded-br-2xl">Blockchain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
