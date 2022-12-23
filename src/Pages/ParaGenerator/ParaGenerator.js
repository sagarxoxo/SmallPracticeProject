import React, { useState } from "react";
import paraData from "./Data";

export default function ParaGenerator() {
  const [generateNum, setGenerateNum] = useState(0);

  const [paraD, setParaD] = useState([]);

  console.log(paraD);

  const generatePara = () => {
    setParaD(paraData.slice(0, generateNum));
  };

  return (
    <div className="flex flex-col items-center py-20 bg-[#F1F5F8] h-full">
      <h1 className="text-2xl font-bold mb-6">TIRED OF BORING LOREM IPSUM?</h1>
      <div className="flex flex-row items-center">
        <span className="text-2xl mb-2">Paragraphs: </span>
        <input
          type="number"
          value={generateNum}
          name="generateNum"
          onChange={(e) => setGenerateNum(e.target.value)}
          className="bg-gray-50 border mx-4 w-16 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-2 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          //   value={}
          required
        />
        <button
          type="button"
          onClick={generatePara}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>
      <div className="flex flex-col w-5/12 mt-10 text-[#618EC0]">
        {paraD?.map((data, index) => (
          <p key={index}>
            {data} <br />
            <br />
          </p>
        ))}
      </div>
    </div>
  );
}
