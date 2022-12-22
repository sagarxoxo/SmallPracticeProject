import React, { useState, useEffect } from "react";
import "./Experience.css";

export default function Experience() {
  const [exData, setExData] = useState();
  const [showData, setShowData] = useState();

  const fetchData = async () => {
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    setExData(data);
    setShowData(data[0]);
  };

  console.log(showData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="exPage">
      <h1 className="text-5xl font-bold">Experience</h1>
      <div className="flex flex-row mx-80 my-20">
        <div className="flex flex-col">
          {exData?.map((data) => {
            return (
              <button
                className="mx-20 mb-10 text-xl font-normal pl-4 text-center"
                style={{
                  color: showData.company === data.company && "#2CAEBA",
                  borderLeft:
                    showData.company === data.company && "2px solid #2CAEBA",
                }}
                onClick={() => setShowData(data)}
              >
                {data.company}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl ">{showData?.title}</h2>
          <button className="bg-[#dae2ec] text-[#617d98] font-medium mt-2 p-1 rounded-md w-24">
            {showData?.company}
          </button>
          <p className="">{showData?.dates}</p>
          <ul className="mt-8 text-[#324d67]">
            {showData?.duties.map((data) => {
              return <li className="list-disc">{data}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
