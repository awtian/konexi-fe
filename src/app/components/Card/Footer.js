import React from "react";

export default function Footer() {
  const generateLastExport = () => {
    const lastExport = localStorage.getItem("last");
    if (lastExport) {
      const diff = new Date() - new Date(lastExport);
      const sec = Math.floor(diff / 1000);
      const mins = Math.floor(sec / 60);
      const hours = Math.floor(mins / 60);

      if (hours >= 1) {
        return `Last export ${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else {
        return `Last export ${mins} minute${mins > 1 ? "s" : ""} ago`;
      }
    } else {
      return "";
    }
  };
  return (
    <div className="border-neutral-100 px-6 py-3 flex w-full justify-center text-gray-400">
      {generateLastExport()}
    </div>
  );
}
