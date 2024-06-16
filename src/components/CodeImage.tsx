import { useState } from "react";
import download from "downloadjs";
import { Download, X } from "lucide-react";
import * as htmlToImage from "html-to-image";
import {
  atomDark,
  vscDarkPlus,
  nightOwl,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { GreenDot, BlueDot, PinkDot } from "./Dots";
import { useColor, useDisplay } from "../store/DisplayContext";

type CodeProps = {
  code: any;
};

const CodeImage = ({ code }: CodeProps) => {
  const { setDisplay } = useDisplay();
  const { color, setColor } = useColor();
  const [fileName, setFileName] = useState("MyReact.jsx");

  const downloadImage = () => {
    const node = document.getElementById("code-container");
    if (node) {
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          download(dataUrl, "code-snippet.png");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const syntaxHighlighterStyle =
    color === "red" ? nightOwl : color === "yellow" ? vscDarkPlus : atomDark;

  return (
    <>
      <div className="absolute top-8 w-full flex flex-col gap-8 justify-center items-center text-4xl">
        {/* buttons */}
        <div className="flex w-full justify-end gap-8 md:gap-10 lg:gap-12 pr-8">
          <div className="cursor-pointer" onClick={downloadImage}>
            <Download color="#fff" size={28} />
          </div>
          <div className="cursor-pointer">
            <X color="#fff" size={28} onClick={() => setDisplay(false)} />
          </div>
        </div>

        <div
          id="code-container"
          className="w-full px-2 md:px-8 lg:px-[15rem] h-[85vh] relative"
        >
          <div className="w-full h-full flex rounded-xl jshine z-[10]">
            <div className="m-[3px] p-1 md:pt-2 bg-gray-950 w-full rounded-xl relative overflow-hidden">
              {/* main box */}
              <div className="flex flex-col gap-96">
                {/* top bar */}
                <div className="absolute top-0 left-0 rounded-t-xl w-full bg-gray-900 h-[3rem] border-b-2 border-white/10">
                  {/* add overflow-hidden in the below line */}
                  <div className="ml-2 md:ml-3 lg:ml-4 text-sm h-full flex gap-4 md:gap-16 lg:gap-20 items-center">
                    {/* 3 dots */}
                    <div className="mt-2 flex gap-1 md:gap-2">
                      {window.innerWidth <= 768 && (
                        <>
                          <div
                            onClick={() => setColor("red")}
                            className="cursor-pointer"
                          >
                            <GreenDot width={18} height={18} />
                          </div>
                          <div onClick={() => setColor("yellow")}>
                            <PinkDot width={18} height={18} />
                          </div>
                          <div onClick={() => setColor("green")}>
                            <BlueDot width={18} height={18} />
                          </div>
                        </>
                      )}
                      {window.innerWidth > 768 && (
                        <>
                          <div onClick={() => setColor("red")}>
                            <GreenDot width={22} height={22} />
                          </div>
                          <div onClick={() => setColor("yellow")}>
                            <PinkDot width={22} height={22} />
                          </div>
                          <div onClick={() => setColor("green")}>
                            <BlueDot width={22} height={22} />
                          </div>
                        </>
                      )}
                    </div>

                    {/* file name */}
                    <div className="w-[60%] md:w-[30%] lg:w-[20%] h-full mt-2 md:mt-3 flex items-center font-bold bg-gray-950 rounded-t-xl text-base">
                      <input
                        type="text"
                        value={fileName}
                        onChange={(e: { target: { value: string } }) =>
                          setFileName(e.target.value)
                        }
                        className="bg-transparent focus:outline-none appearance-none ml-3 md:ml-4 italic text-ellipsis"
                      />
                    </div>
                  </div>
                </div>

                {/* code */}
                <div className="mt-14 text-xs md:text-sm">
                  <pre className="whitespace-pre-wrap w-full overflow-auto">
                    <SyntaxHighlighter
                      language="javascript"
                      customStyle={{
                        background: "none",
                        padding: 0,
                        fontFamily: "cursive",
                      }}
                      style={syntaxHighlighterStyle}
                      showLineNumbers
                    >
                      {code}
                    </SyntaxHighlighter>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[4.5rem] w-full h-[90vh] z-[-1] ball" />
    </>
  );
};

export default CodeImage;
