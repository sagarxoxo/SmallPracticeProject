import React, { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [exData, ExData] = useState();

  useEffect(() => {
    const res = fetch("https://course-api.com/react-tabs-project");
    const data = res.json();
    ExData(data);
  }, []);

  console.log(data);

  return (
    <div className="exPage">
      <h1 className="text-5xl font-bold">Experience</h1>
      <div className="flex flex-row  mx-80 my-20">
        <div className="mx-20">SideBar</div>
        <div>Content</div>
      </div>
    </div>
  );
}
