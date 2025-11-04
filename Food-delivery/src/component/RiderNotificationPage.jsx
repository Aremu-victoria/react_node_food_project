import React, { useState } from "react";
import RiderDash from "./RiderDash";
import RiderHeader from "./RiderHeader";
import WelcomeBack from "./WelcomeBack";
import { AiOutlineSortAscending, AiOutlineFilter } from "react-icons/ai";
import RiderDownReview from "./RiderDownReview";

const RiderNotificationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const transactions = [
    {
      id: 1,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'DECLINE'
    },
    {
      id: 2,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'ACCEPT'
    },
    {
      id: 3,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'WAITING...'
    },
    {
      id: 4,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'ARCHIVE...'
    },
    {
      id: 5,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'DECLINE'
    },
    {
      id: 6,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'ACCEPT'
    },
    {
      id: 7,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'WAITING...'
    },
    {
      id: 8,
      transactionId: "Order receive from ALATA RESTURANT waiting for your respond in 5min",
      amount: "₦2,500",
      date: "10 June 2024",
      time: "09:35am",
      timeLim: "30min",
      status: 'ARCHIVE...'
    },
  ];

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();
  return (
    <div>
      <RiderDash />
      <div className="p-4 sm:ml-60 bg-[#EAEFFA] md:h-screen">
        <WelcomeBack
          welcome="Welcome back, Mr Ibrahim"
          code="BXCSFS"
          date={`${monthName} ${date}, ${year}`}
        />
        <RiderHeader headling="Notification" />
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
        <div className="relative overflow-x-auto custom-scrollbar">
          <div className="space-y-2 text-sm align-baseline w-full min-w-max">
            {currentTransactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className="dark:bg-gray-800 bg-white align-baseline flex min-w-max"
              >
                <p className="px-3 py-2">{transaction.transactionId}</p>
                <p className="px-3 py-2">{transaction.amount}</p>
                <p className="px-3 py-2">{transaction.date}</p>
                <p className="px-3 py-2">{transaction.time}</p>
                <p className="px-3 py-2">{transaction.timeLim}</p>
                <p className="px-2 py-2">
                  <button
                    className={`${
                      transaction.status === "ACCEPT"
                        ? "bg-green-500"
                        : transaction.status === "DECLINE"
                        ? "bg-red-500"
                        : transaction.status === "ARCHIVE"
                        ? "bg-red-500"

                        : "bg-gray-500"
                    } rounded-md text-bold text-white p-2 px-6`}
                  >
                    {transaction.status}
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end text-gray-400 items-center mt-4">
          <div className="flex justify-between space-x-10">
            <div>Rows per page: {transactionsPerPage}</div>
            <div>
              {indexOfFirstTransaction + 1}-{indexOfLastTransaction} of {transactions.length}
            </div>
          </div>
          <p className="flex space-x-2">
            <span onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </span>
            <span onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </p>
        </div>
        <RiderDownReview />
      </div>
    </div>
  );
};

export default RiderNotificationPage;
