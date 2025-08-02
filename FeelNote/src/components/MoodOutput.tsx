import { useState } from "react";
import {Button} from "@/components/ui/button"

interface Props{
    subject: string;
  footer: string;
  quote: string;
  generate: boolean;
  handleReset: () => void;
}

const MoodOutput = ({subject,footer,quote,handleReset}:Props) => {
    const  date = new Date()
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    const [toolTipText,setToolTipText] = useState("copy")

    function copyToClipboard(text:string) {
  navigator.clipboard.writeText(text).then(() => {
    setToolTipText("Copied...");
setTimeout(() => {
  setToolTipText("copy");
},1000)
  }).catch(err => {
    console.log(err)
    setToolTipText("Copy to clipboard failed");
  });
}
  return (
<div className="w-[90%] h-auto bg-[#f9f9f9] p-8 m-auto mt-12 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold">Created from How You Feel</h2>
                <p className="font-normal text-gray-500">Generate on {formattedDate}</p>
                <div className="mt-6">
                    <label className="text-base font-semibold text-[#513bf6]">Subject</label>
                    <p className="text-xl mt-3 rounded-xl p-5 bg-[#e6ecff] font-sans font-bold border-3 border-dashed border-[#acbdfa]">{subject}</p>
                </div>
                <div className="mt-6">
                    <label className="text-base font-semibold text-[#c43bf6]">Footer </label>
                    <p className="text-lg mt-3 rounded-xl p-5 bg-[#ffe6ff] font-sans font-normal border-3 border-dashed border-[#f3acfa]">{footer}</p>
                </div>
                <div className="mt-6">
                    <label className="text-base font-semibold text-[#08ac2b]">Inspirational Quote </label>
                    <p className="text-lg mt-3 rounded-xl p-5 bg-[#e6ffea] font-sans font-normal border-3 border-dashed border-[#acfabc]">{`"${quote}"`}</p>
                </div>
                <div className="mt-5 flex w-full bg-amber-50 gap-5">
                  <div className="tooltip">
                    <div className="tooltip-content">
    <div className="text-white text-base font-black">{toolTipText}</div>
  </div>
                     <Button variant="outline" className="border border-blue-500 bg-blue-100 text-blue-800 p-6 cursor-pointer hover:text-blue-800 hover:shadow-lg shadow-blue-200" onClick={() => copyToClipboard(`${subject},${footer},${quote}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>

                    </Button>
                  </div>
                    <button className="py-2 rounded-lg w-full bg-gradient-to-r from-[#3313e5] to-[#b875e8] text-white font-bold text-xl flex gap-2 items-center justify-center cursor-pointer" onClick={handleReset}>
                        Reset
                    </button>
                
                </div>
            </div>
  )
}

export default MoodOutput
