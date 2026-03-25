import React from "react";

const NotFound = () => {
    const date = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="flex flex-1 justify-center items-center flex-col bg-[#792C2F]  text-[#FAF9F6] text-center "
        >
          <h1 className="text-2xl">404 error</h1>{" "}
          <h2>
            The page you're looking for isn't found. Check your url or refresh
            this page.
          </h2>
        </div>
        <footer className="bg-black text-[#d1dfdbef] rounded-base shadow-xs  border-default ">
          <div className="w-full max-w-screen-xl p-4 md:py-8  flex items-center justify-center flex-col">
            <p>© {date} Asmah</p>
            <a href="https://asmahwebdev.com/">website generator by Asmah</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NotFound;
