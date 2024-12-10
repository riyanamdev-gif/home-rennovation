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
        <div className=" px-5 py-10 flex flex-col md:px-10 md:py-10 gap-5 bg-teal-900 text-white lg:px-20 lg:py-20">
            <div className="flex flex-col gap-5 lg:flex-row">
                {/* Left Panel */}
                <div className="flex flex-col gap-5 w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold">Budget Tracker</h1>
                    <label className="text-xl">Renovation Area:</label>
                    <select
                        className="border border-black p-2 text-black"
                        value={selectedArea}
                        onChange={(e) => handleAreaChange(e.target.value)}
                    >
                        <option value="">Select area</option>
                        {renovationAreas.map((area, index) => (
                            <option key={index} value={area}>{area}</option>
                        ))}
                    </select>

                    {/* Dimensions */}
                    <div className="">
                        <h2 className="text-xl font-semibold">Dimensions</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="width">Width (m)</label>
                                <input
                                    className="block w-full border p-2 text-black"
                                    type="number"
                                    value={dimensions.width}
                                    onChange={(e) => handleDimension('width', e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="height">Height (m)</label>
                                <input
                                    className="block w-full border p-2 text-black"
                                    type="number"
                                    value={dimensions.height}
                                    onChange={(e) => handleDimension('height', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Expenses */}
                    <div className="flex flex-col gap-4">
                       <div className='flex  justify-between '>
                       <h2 className="text-xl font-semibold">Expenses</h2>
                        <h2 className="text-xl font-semibold">Estimated Cost</h2>
                        <h2 className="text-xl font-semibold">Actual Cost</h2>
                       </div>
                        {expenses.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <p className="w-1/3">{item}</p>
                                <input
                                    type="number"
                                    className="w-1/3 p-2 text-black border mr-2"
                                    value={estimatedCosts[item] || ''}
                                    onChange={(e) => handleCostChange('estimated', item, e.target.value)}
                                />
                                <input
                                    type="number"
                                    className=" w-1/3 p-2 text-black border"
                                    value={actualCosts[item] || ''}
                                    onChange={(e) => handleCostChange('actual', item, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="mt-5 text-xl uppercase p-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black shadow-lg hover:opacity-90"
                        onClick={handleAddRecord}
                    >
                        Add Record
                    </button>
                </div>

                {/* Right Panel */} 
                <div className="hidden lg:flex md:hidden justify-center w-full lg:w-1/2">
                    <img src="/images/vas.png" alt="Renovation" className="max-w-full h-auto rounded-lg" />
                </div>
            </div>

            {/* Records Table */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Renovation Details</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Renovation Area</th>
                                <th className="px-4 py-2">Area (m²)</th>
                                <th className="px-4 py-2">Total Estimated Cost</th>
                                <th className="px-4 py-2">Total Actual Cost</th>
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
        </div>
    );
};

export default Budgettracker;
