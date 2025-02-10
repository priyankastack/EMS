import React from "react";
import Header from "../common/Header";
import Tasklist from "../common/TaskList";

const EmpDashboard = ({ loggdata, logOut }) => {
  return (
    <>
      <div className='w-full text-white' style={{padding:'15px 30px'}}>
        <Header loggdata={loggdata} logOut={logOut} />
        <Tasklist loggdata={loggdata} logOut={logOut} />
      </div>
    </>
  );
};
export default EmpDashboard;
