import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";


const AllTask = () => {
  const authData=useContext(AuthContext);

  return (
    <div id="alltask" className="bg-[#1c1c1c]  rounded-sm overflow-y-auto" >

<table className="w-full border border-amber-100 text-center">
    <thead>
        <tr>
            <th className="border-2 border-emerald-600 px-5 !py-2">Name</th>
            <th className="border-2 border-emerald-600 px-5 !py-2">New</th>
            <th className="border-2 border-emerald-600 px-5 !py-2">Active</th>
            <th className="border-2 border-emerald-600 px-5 !py-2">Failed</th>
            <th className="border-2 border-emerald-600 px-5 !py-2">Completed</th>
        </tr>
    </thead>
    <tbody className="border-2">
      {!authData?"":authData.employees.map((ele,idx)=>{
        return(
<tr key={idx} >
            <td className="border-2 border-emerald-600  px-5 !py-2 ">{ele.name}</td>
            <td className="border-2 border-emerald-600 text-blue-600 px-5 !!py-2 ">{ele.taskCounts.newtask}</td>
            <td className="border-2 border-emerald-600 text-amber-300 px-5 !py-2 ">{ele.taskCounts.active}</td>
            <td className="border-2 border-emerald-600 text-red-500 px-5 !py-2 ">{ele.taskCounts.failed}</td>
            <td className="border-2 border-emerald-600 text-emerald-600 px-5 !py-2 ">{ele.taskCounts.completed}</td>
        </tr>
        )
      })}
        
    </tbody>
</table>
    </div>
  );
};

export default AllTask;