import React from "react";

function layout({ children }) {
  return (
    <>
      <header className="flex items-center justify-between py-3 px-5 mb-24 rounded-lg bg-red-500 ">
        <h1 className="text-2xl font-bold">Crypto App</h1>
        <p className="text-lg">
          Reza Abedi |
          <a
            className="text-black font-semibold"
            href="https://github.com/reza-abd95"
          >
            {" "}
            Reza's GitHub{" "}
          </a>
        </p>
      </header>
      {children}
      <footer className="text-center p-5 mt-[80px] rounded-lg bg-red-500 ">
        Developed By Reza ABD
      </footer>
    </>
  );
}

export default layout;
