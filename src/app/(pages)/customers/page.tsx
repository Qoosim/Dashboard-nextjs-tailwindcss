import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../../data/data.js';

const Customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2>Welcome back, Kassy</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto border p-4 rounded-lg bg-white overflow-y-auto">
          <div className="my-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {
              data.map((order, id) => (
                <li key={id} className="bg-gray-50 hover:gray-100 my-3 p-2 rounded-lg grid md:grid-cols-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BsPersonFill className="text-purple-800" />
                    </div>
                    <p className="pl-4">{order.name.first + ' ' + order.name.last}</p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">{order.name.first.toLowerCase()}@gmail.com</p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="hidden sm:flex justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical className="cursor-pointer" />
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Customers;
