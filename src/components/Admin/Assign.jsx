import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.jsx";
import { ToastContainer, toast } from 'react-toastify';

const Assign = () => {
  const authData = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assign, setAssign] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Creating a new task object
       const newTask = {
      title,
      date,
      category,
      assign,
      desc,
      active: false,
      newtask: true,
      failed: false, // Changed to false for new tasks
      completed: false,
    };

    if (authData.employees) {
      authData.employees.forEach((ele) => {
        if (ele.name === assign) {
          // Ensure `ele.tasks` is initialized before updating
          ele.tasks = ele.tasks ? [...ele.tasks, newTask] : [newTask];

          // Update task count correctly
          ele.taskCounts.task = (ele.taskCounts.task || 0) + 1;

          console.log(ele);
          toast.success("Task Assigned successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
    }

    // Reset form fields after submission
    setTitle("");
    setDate("");
    setCategory("");
    setAssign("");
    setDesc("");
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="bg-[#1c1c1c] grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 gap-3 rounded-sm w-full box-border"
        style={{ padding: "30px", margin: "10px 0" }}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label className="flex flex-col gap-1">
              Task Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Task"
                required
                className="border-white !px-2 border-2 rounded-sm outline-none placeholder-white h-10"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Date
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                required
                className="border-white !px-2 border-2 rounded-sm placeholder-white outline-none h-10"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Assign to
              <input
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                type="text"
                placeholder="Employee name"
                required
                className="border-white !px-2 border-2 outline-none rounded-sm placeholder-white h-10"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col gap-1">
              Category
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, etc"
                required
                className="border-white !px-2 border-2 outline-none rounded-sm placeholder-white h-10"
              />
            </label>
          </div>
        </div>
        <div className="box-border flex flex-col gap-4">
          <div className="h-[100%]">
            <label className="flex flex-col gap-1 h-[100%] min-h-[100px]">
              Description
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="h-[90%] border-white !px-2 border-2 outline-none rounded-sm placeholder-white w-full"
              ></textarea>
            </label>
          </div>
          <button className="bg-emerald-600 h-10 rounded-sm mt-2 w-full">
            Create Task
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Assign;