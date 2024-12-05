import React, { useState } from 'react';
import '../index.css';

const renovationAreas = ['Kitchen', 'Bathroom', 'Bedroom', 'Living Room', 'Basement'];
const expenses = ["Materials", "Labours", "Paints", "Furnitures"];

const Budgettracker = () => {
    const [selectedArea, setSelectedArea] = useState([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); 
    const [area, setArea] = useState(0);
    const [estimatedCosts, setEstimatedCosts] = useState({});
    const [actualCosts, setActualCosts] = useState({});
    const [totalEstimatedCost, setTotalEstimatedCost] = useState(0);
    const [totalActualCost, setTotalActualCost] = useState(0);
    const [records, setRecords] = useState([]); 

    const handleAreaChange = (value) => {
        setSelectedArea(value);
    }

    const handleDimension = (key, value) => {
        const newDimensions = { ...dimensions, [key]: value };
        setDimensions(newDimensions);
        setArea(newDimensions.width * newDimensions.height);
    }

    const handleCostChange = (type, item, value) => {
        const parsedValue = parseFloat(value) || 0;
        const updatedCosts = type === 'estimated'
          ? { ...estimatedCosts, [item]: parsedValue }
          : { ...actualCosts, [item]: parsedValue };
      
        if (type === 'estimated') {
          setEstimatedCosts(updatedCosts);
          const total = Object.values(updatedCosts).reduce((sum, cost) => sum + cost, 0);
          setTotalEstimatedCost(total);
        } else {
          setActualCosts(updatedCosts);
          const total = Object.values(updatedCosts).reduce((sum, cost) => sum + cost, 0);
          setTotalActualCost(total);
        }
      };
      

    const handleAddRecord = () => {
        const record = {
            areas: selectedArea,
            area: area,
            estimatedCost: totalEstimatedCost,
            actualCost: totalActualCost

        };

        setRecords((prevRecords) => [...prevRecords, record]); 
        
            setSelectedArea([]);
            setDimensions({ width: '', height: '' });
            setArea(0);
            setEstimatedCosts({});
            setActualCosts({});
            setTotalEstimatedCost(0);
            setTotalActualCost(0);
          
    }

    return (
         <div className="flex flex-col px-20  py-20 gap-5 bg-teal-900 text-white  lg:flex lg:flex-col ">
            <div className='flex border-2 border-red-800 gap-20'>
                <div className="flex flex-col gap-5 w-[50%] border-2 border-white">
                <h1 className="text-4xl font-bold">Budget Tracker</h1>
                    <label className="text-2xl">Renovation Area:</label>
                    <select
                        className="border-black w-[50%] p-2 text-black"
                        value={selectedArea}
                        onChange={(e) => handleAreaChange(e.target.value)}
                    >
                        <option value="">Select area</option>
                        {renovationAreas.map((area, index) => (
                            <option key={index} value={area}>{area}</option>
                        ))}
                    </select>

                    <div className='object-fit border-2 border-indigo-800'>
                        <h1 className="text-2xl">Dimensions</h1>
                        <table className="mt-5">
                            <tbody>
                                <tr className="flex justify-around">
                                    <th><label htmlFor="width">Width(m)</label></th>
                                    <th><label htmlFor="height">Height(m)</label></th>
                                </tr>
                                <tr className="flex gap-4">
                                    <th>
                                        <input
                                            className="text-black p-1 font-normal"
                                            type="number"
                                            value={dimensions.width}
                                            onChange={(e) => handleDimension('width', e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        <input
                                            className="text-black p-1 font-normal"
                                            type="number"
                                            value={dimensions.height}
                                            onChange={(e) => handleDimension('height', e.target.value)}
                                        />
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col   mt-2">
                        <div className="flex gap-[150px] text-2xl">
                            <p>Expenses</p>
                            <p className="pl-4">Estimated Cost</p>
                            <p className="pr-6">Actual Cost</p>
                        </div>

                        {expenses.map((item, index) => (
                            <div key={index} className="flex justify-between gap-5  items-center p-2">
                                <p className="w-1/3">{item}</p>
                                <input
                                    type="number"
                                    className="w-1/3 p-1 text-black"
                                    value={estimatedCosts[item] || ''}
                                    onChange={(e) => handleCostChange('estimated', item, e.target.value)}
                                />
                                <input
                                    type="number"
                                    className="w-1/3 p-1 text-black"
                                    value={actualCosts[item] || ''}
                                    onChange={(e) => handleCostChange('actual', item, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="mt-5 text-xl  uppercase text-black p-4 px-12 rounded-lg shadow-lg bg-gradient-to-r from-[#ee9ca7] via-[#ffdde1] to-[#ee9ca7] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center]"
                        onClick={handleAddRecord}
                    >
                        Add Record
                    </button>
            </div>
                <div className='w-[30%] border-2 border-pink-500 lg:w-[50%] md:w-[50%]'>
                    <img src="/images/vas.png" alt="" className=''/>
                </div>
                </div>
               

            <div className="mt-10 mr-20 mb-10">
                <h2 className="text-3xl font-bold mb-4">Renovation Details</h2>
                <div className="border-t-2"></div>
                <table className="table-auto w-full text-white mt-3">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 font-light text-2xl">Renovation Area</th>
                            <th className="px-4 py-2 font-light text-2xl">Area (m²)</th>
                            <th className="px-4 py-2 font-light text-2xl">Total Estimated Cost</th>
                            <th className="px-4 py-2 font-light text-2xl">Total Actual Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{record.areas}</td>
                                <td className="px-4 py-2">{record.area}</td>
                                <td className="px-4 py-2">{record.estimatedCost}</td>
                                <td className="px-4 py-2">{record.actualCost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Budgettracker;