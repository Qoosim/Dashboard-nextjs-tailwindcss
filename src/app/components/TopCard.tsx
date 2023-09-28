import React from 'react'

const TopCard = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between border p-4 rounded-lg w-full'>
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-greedn-700 text-lg">+18%</span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between border p-4 rounded-lg w-full'>
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold">$1,459</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-greedn-700 text-lg">+11%</span>
        </p>
      </div>
      <div className='bg-white flex justify-between border p-4 rounded-lg w-full'>
        <div className="flex flex-col w-full pb-4">
          <p className="text-lg font-bold">11,776</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-greedn-700 text-lg">+17%</span>
        </p>
      </div>
    </div>
  )
}

export default TopCard
