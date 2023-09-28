import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../../data/data.js';

const Orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome back, Kassy</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto border p-4 rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {
              data.map((order, id) => (
                <li key={id} className="bg-gray-50 hover:gray-100 my-3 p-2 rounded-lg grid md:grid-cols-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">${order.total.toLocaleString()}</p>
                      <p className="text-gray-800 text-sm">{order.name.first}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span className={
                      order.status == 'Processing' ? 'bg-green-200 p-2 rounded-lg' : order.status == 'Completed' ? 'bg-blue-200 p-2 rounded-lg' : 'bg-yellow-200 p-2 rounded-lg'
                    }>{order.status}</span>
                  </p>
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

export default Orders;
