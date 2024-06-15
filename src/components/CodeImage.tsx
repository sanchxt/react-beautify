import { Download, X } from "lucide-react";
import { useDisplay } from "../store/DisplayContext";

type CodeProps = {
  code: string;
};

const CodeImage = ({ code }: CodeProps) => {
  const { setDisplay } = useDisplay();

  return (
    <>
      <div className="absolute top-8 w-full flex flex-col gap-8 justify-center items-center text-4xl">
        {/* buttons */}
        <div className="flex w-full justify-end gap-8 md:gap-10 lg:gap-12 pr-8">
          <div>
            <Download color="#fff" size={28} />
          </div>
          <div className="cursor-pointer">
            <X color="#fff" size={28} onClick={() => setDisplay(false)} />
          </div>
        </div>

        <div className="w-full px-2 md:px-8 lg:px-[15rem] h-[85vh] relative">
          <div className="bg-blue-600 w-full h-full flex rounded-xl jshine z-[10]">
            <div className="m-1 md:m-1.5 p-2 bg-gray-600 w-full rounded-xl">
              {code}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[4.5rem] w-full h-[90vh] z-[-1] ball" />
    </>
  );
};

export default CodeImage;
