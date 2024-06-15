import { useState } from "react";
import CodeImage from "./CodeImage";
import { useDisplay } from "../store/DisplayContext";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeForm = () => {
  // const [display, setDisplay] = useState(false);
  const { display, setDisplay } = useDisplay();
  const [code, setCode] = useState("");

  const beautifyCode = () => {
    if (code !== "") {
      setDisplay(true);
    } else {
      toast.error("Code cannot be empty!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="overflow-hidden relative h-screen w-screen">
        <div
          className={`flex flex-col items-center h-screen w-screen overflow-x-hidden ${
            display ? "opacity-[1.9%]" : "opacity-100"
          }`}
        >
          <div className="mt-16 text-3xl">
            <h1>Beautify ReactJS Code</h1>
          </div>

          <div className="flex flex-col md:justify-center items-center h-screen w-screen mb-48 gap-12">
            <div className="w-full p-2 md:p-0 md:w-2/3 xl:w-1/2 h-1/2 lg:h-2/3 mt-24 md:mt-0">
              <textarea
                name="code"
                className="w-full h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl focus:outline-none p-4 text-white/80"
                placeholder="Paste your ReactJS code here..."
                onChange={(e) => setCode(e.target.value)}
                style={{ resize: "none" }}
              ></textarea>
            </div>

            <button
              onClick={beautifyCode}
              className="bg-gradient-to-br from-gray-800 to-slate-950 px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4 rounded-lg text-xl md:text-2xl lg:text-3xl"
            >
              Beautify
            </button>
          </div>
        </div>

        {display && <CodeImage code={code} />}
      </div>
    </>
  );
};

export default CodeForm;
