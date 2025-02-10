import React from "react";
import AcceptTask from "../Task/AcceptTask";
import NewTask from "../Task/NewTask";
import CompleteTask from "../Task/CompleteTask";
import FailedTask from "../Task/FailedTask";
const Tasklist = ({ loggdata, logOut }) => {
  return (
    <>
      <div className="  grid md:grid-cols-1 lg:grid-cols-4 !gap-4 h-auto text-amber-100" >
        <div className="bg-[#118ab2] w-80 h-35 rounded-lg flex flex-col  justify-center !px-4   ">
          <p className="text-4xl"> 
            {loggdata ? loggdata.taskCounts.newtask : ""}{" "}
          </p>
          <p className="text-2xl">New Task</p>
        </div>
        <div className="bg-[#80ed99] w-80 h-35 rounded-lg flex flex-col gap-2 justify-center !px-4 ">
          <p className="text-4xl">
            {loggdata ? loggdata.taskCounts.completed : ""}{" "}
          </p>
          <p className="text-2xl">Completed Task</p>
        </div>
        <div className="bg-[#fcf300] w-80 h-35 rounded-lg flex flex-col gap-2 justify-center !px-4 ">
          <p className="text-4xl">
            {loggdata ? loggdata.taskCounts.active : ""}{" "}
          </p>
          <p className="text-2xl">Accepted Task</p>
        </div>
        <div className="bg-[#e76f51] w-80 h-35 rounded-lg flex flex-col gap-2 justify-center !px-4 ">
          <p className="text-4xl">
            {loggdata ? loggdata.taskCounts.failed : ""}{" "}
          </p>
          <p className="text-2xl">FailedTask</p>
        </div>
      </div>
      <div
        id="tasklist"
        className="  flex justify-start  overflow-x-auto gap-5 !mt-10 "
      >
        {!loggdata
          ? ""
          : loggdata.tasks.map((ele, idx) => {
              if (ele.active) {
                return <AcceptTask loggdata={ele} key={idx} />;
              }
              if (ele.completed) {
                return <CompleteTask loggdata={ele} key={idx} />;
              }
              if (ele.failed) {
                return <FailedTask loggdata={ele} key={idx} />;
              }
              if (ele.newtask) {
                return <NewTask loggdata={ele} />;
              }
            })}
      </div>
    </>
  );
};

export default Tasklist;