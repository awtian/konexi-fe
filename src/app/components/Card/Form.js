import React from "react";
import Image from "next/image";

export default function Form(props) {
  return (
    <div>
      {/* Account */}
      <div className="w-full mb-3">
        <label
          className="block tracking-wide text-gray-700 text-md font-bold mb-2"
          for="grid-state"
        >
          Google Account
        </label>
        <div className="relative">
          <select
            className="block font-medium appearance-none w-full border border-gray-100 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
            id="grid-state"
          >
            <option>Account Name</option>
            <option>Account Name 2</option>
            <option>Account Name 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* File */}
      <div className="w-full mb-3">
        <label
          className="block tracking-wide text-gray-700 text-md font-bold mb-2"
          for="grid-state"
        >
          File
        </label>
        <div className="relative">
          <select
            disabled
            className="block font-medium appearance-none w-full border border-gray-100 text-gray-700 py-3 px-4 pl-12 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
            id="grid-state"
          >
            <option>sheetname</option>
          </select>
          <div className="absolute inset-y-0 right-[3rem] flex items-center px-4 bg-neutral-100 rounded-full my-1 text-gray-600">
            Tab 1{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div
            onClick={() => props.setCurrentShow("GoogleLogin")}
            className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-700">
            <Image
              src="/images/google-sheet-icon.png"
              width={20}
              height={20}
              alt="Gsheet icon"
            />
          </div>
        </div>
      </div>
      <button className="rounded-md mt-2 w-full bg-blue-500 text-white font-medium flex justify-center items-center py-3 gap-2">
        Export
      </button>
    </div>
  );
}
