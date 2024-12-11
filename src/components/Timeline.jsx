import React, { useState } from 'react';

const renovationAreas = ['Kitchen', 'Bathroom', 'Bedroom', 'Living Room', 'Basement'];
const tasks = ["Painting", "Demolition", "Furniture", "Flooring"];

const Timeline = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [taskRecords, setTaskRecords] = useState([]);

  const handleAreaChange = (value) => {
    setSelectedArea(value);
  };

  const handleTaskChange = (value) => {
    setSelectedTask(value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddTask = () => {
    if (selectedArea && selectedTask && startDate && endDate) {
      setTaskRecords((prev) => [
        ...prev,
        { selectedArea, selectedTask, startDate, endDate },
      ]);

      setSelectedArea('');
      setSelectedTask('');
      setStartDate('');
      setEndDate('');
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-col lg:px-20 lg:py-10 gap-5 bg-stone-200  px-4 py-5">
      <div className=' '>
        <h1 className="text-4xl font-bold px-11 mb-4">Project Timeline</h1>
        <div className='flex w-full  gap-10 justify-around'>
          <div className="flex flex-col  lg:w-[50%] md:w-[50%] gap-5">
            <label className="text-2xl">Renovation Area:</label>
            <select
              className="border-black p-2 text-black lg:w-[80%] md:w-[80%]"
              value={selectedArea}
              onChange={(e) => handleAreaChange(e.target.value)}

            >
              <option value="">Select area</option>
              {renovationAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>

            <label className="text-2xl">Task:</label>
            <select
              className="border-black p-2 text-black lg:w-[80%] md:w-[80%]"
              value={selectedTask}
              onChange={(e) => handleTaskChange(e.target.value)}
            >
              <option value="">Select task</option>
              {tasks.map((task, index) => (
                <option key={index} value={task}>
                  {task}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-2 lg:w-[80%] gap-5 ">
              <label htmlFor="startdate" className="text-2xl">
                Start Date:
              </label>
              <label htmlFor="enddate" className="text-2xl">
                End Date:
              </label>
              <input
                className=" p-2   lg:w-[80%] "
                type="date"
                id="Start Day"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <input
                className="p-2 lg:w-[80%]"
                type="date"
                id="End Day"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>

            <button
              className="p-4 bg-sky-600 text-white w-[30%]  text-sm lg:text-3xl md:text-3xl"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          <div className='w-[450px] h-[450px]  relative hidden md:inline ld:inline'>
            <div className='inset-0 bg-black  rotate-45 transform scale-75 absolute '></div>
            <div className='absolute inset-0 flex justify-center items-center '>
              <img src="/images/todo.jpg" alt="" className="transform rotate-360 w-[300px] h-[300px]"/>
              </div>
          </div>
        </div>

        <div className="mt-10   mx-auto hidden lg:grid  ">
          <h2 className="text-3xl font-bold mb-4 text-center">Project Timeline Schedule</h2>
          <div className="border-t-2 border-black"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-3 font-normal text-lg lg:text-2xl">
            {/* Header */}
            <h3 className="font-bold px-2 py-2">Renovation Area</h3>
            <h3 className="font-bold px-2 py-2">Task</h3>
            <h3 className="font-bold px-2 py-2">Start Date</h3>
            <h3 className="font-bold px-2 py-2">End Date</h3>
            {/* Data */}

            {taskRecords.map((record, index) => (
              <React.Fragment key={index}>
                <span className="px-2 py-2 border-t border-gray-200">{record.selectedArea}</span>
                <span className="px-2 py-2 border-t border-gray-200">{record.selectedTask}</span>
                <span className="px-2 py-2 border-t border-gray-200">{record.startDate}</span>
                <span className="px-2 py-2 border-t border-gray-200">{record.endDate}</span>
              </React.Fragment>
            ))}
          </div>
        </div>


        {/* medium screen / tablets/ipads and smallerr screens*/}
        <div className='  mt-10 py-5 lg:hidden '>
          <header className='text-center text-4xl font-bold'>Project Timeline Schedule</header>
          <div className='border-2 border-black'></div>
          <div className="lg:hidden flex flex-col gap-4 mt-3 font-normal text-sm md:px-10 md:text-xl">
            {taskRecords.map((record, index) => (
              <div
                key={index}
                className="border-t border-gray-200 px-4 py-2 flex flex-col gap-2"
              >
                <div className="flex justify-between">
                  <span className="font-bold">Renovation Area:</span>
                  <span>{record.selectedArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Task:</span>
                  <span>{record.selectedTask}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Start Date:</span>
                  <span>{record.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">End Date:</span>
                  <span>{record.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>




      </div>
    </div>
  );
};

export default Timeline;

