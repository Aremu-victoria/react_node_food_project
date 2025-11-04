import React, { useState } from 'react';
import RiderHeader from './RiderHeader';
import { AiOutlineSortAscending, AiOutlineFilter } from 'react-icons/ai';

const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5; 
  const transactions = [
    { id: 1, transactionId: '#123456791', amount: '₦2,000', date: '10 June 2024', rating: 4.2, status: 'Confirm' },
    { id: 2, transactionId: '#123456792', amount: '₦2,500', date: '10 June 2024', rating: 4.9, status: 'Pending' },
    { id: 3, transactionId: '#123456793', amount: '₦1,800', date: '10 June 2024', rating: 4.5, status: 'Confirm' },
    { id: 4, transactionId: '#123456794', amount: '₦1,500', date: '10 June 2024', rating: 4.2, status: 'Pending' },
    { id: 5, transactionId: '#123456795', amount: '₦2,200', date: '10 June 2024', rating: 4.5, status: 'Confirm' },
  ];

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div>
      <RiderHeader headling='Transaction history' style='mt-5'/>
      <div className="flex justify-end items-center">
      <div className="flex space-x-2 justify-end">
          <button className="flex items-center p-1">
            <AiOutlineSortAscending />
            <span>Sort</span>
          </button>
          <button className="flex items-center p-1">
            <AiOutlineFilter />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-[#FE4501] text-white">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Transaction ID</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Rating</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead><br />
          <tbody className="space-y-2">
            {currentTransactions.map((transaction, index) => (
              <tr key={transaction.id} className="bg-white dark:bg-gray-800 align-baseline">
                <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{transaction.id}</th>
                <td className="px-6 py-2">{transaction.transactionId}</td>
                <td className="px-6 py-2">{transaction.amount}</td>
                <td className="px-6 py-2">{transaction.date}</td>
                <td className="px-6 py-2 flex items-center space-x-1">
                  <span className="text-red-500">★</span>
                  <span>{transaction.rating}</span>
                </td>
                <td className="px-6 py-2">
                  <button className={`${transaction.status === 'Confirm' ? 'bg-green-500' : 'bg-red-800'} rounded-md text-bold text-white p-2 px-6`}>
                    {transaction.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end text-gray-400 items-center mt-4">
        <div className='flex justify-between space-x-10'>
        <div>Rows per page: {transactionsPerPage}</div>
        <div>{totalPages}-10 for 1240</div>
        </div>
        <p className='flex space-x-2'>
            <span>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
</svg>

            </span>
            <span>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
</svg>

            </span>
        </p>
      </div>
    </div>
  );
};

export default Transaction;
