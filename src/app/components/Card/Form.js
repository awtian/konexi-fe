import React, { useState } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";

export default function Form(props) {
  const [showTabDropdown, setShowTabDropdown] = useState(false);
  const [currentTab, setCurrentTab] = useState("Tab 1");
  const [search, setSearch] = useState("");

  const setSearchAlphaNumeric = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z(\ )]+$/; //this will admit letters, numbers and dashes
    if (value.match(regex) || value === "") {
      setSearch(value);
    }
  };

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  const filteredTab = tabs.filter(
    (each) => each.match(new RegExp(search, "gi")) || each === currentTab
  );

  const handleSetTab = (selected) => {
    setCurrentTab(selected);
    setShowTabDropdown(false);
  };

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, currentTab);
    XLSX.writeFile(workbook, "Exported.xlsx");
  };

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
          {/* TAB DROPDOWN */}
          <button
            onClick={() => setShowTabDropdown(!showTabDropdown)}
            className="absolute inset-y-0 right-[3rem] flex items-center px-4 bg-neutral-100 rounded-full my-1 text-gray-600"
          >
            {currentTab}
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
          </button>
          {showTabDropdown && (
            <div
              className="absolute -right-[4rem] z-10 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <div className="relative flex items-center w-11/12 mx-auto h-12 rounded-lg bg-white overflow-hidden border border-gray-100 pa-2">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    value={search}
                    placeholder="Search"
                    onChange={setSearchAlphaNumeric}
                  />
                </div>
                {filteredTab.map((each) => (
                  <a
                    key={each}
                    onClick={() => handleSetTab(each)}
                    className="text-gray-700 px-4 py-2 cursor-pointer flex justify-between"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <p>{each}</p>
                    {each === currentTab && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-400 font-bold"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
          {/* END*/}
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
      <button
        onClick={() => downloadExcel([])}
        className="rounded-md mt-2 w-full bg-blue-500 text-white font-medium flex justify-center items-center py-3 gap-2"
      >
        Export
      </button>
    </div>
  );
}
