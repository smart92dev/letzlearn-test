import React from "react";
import { useState } from "react";
import dialData from "../../data/dial.json";
import stateData from "../../data/state.json";

export default function index() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [country, setCountry] = useState("India");
  const [stateAddress, setStateAddress] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmailId(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  const changeStateAddress = (e) => {
    setStateAddress(e.target.value);
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-3" action="#">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Personal
          </h5>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            Details
          </h3>
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name*
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              onChange={(e) => changeName(e)}
              value={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-400"
                viewBox="0 0 23 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="mobile number"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mobile number*
          </label>
          <div className="relative mb-6">
            <select
              value={country}
              onChange={(e) => changeCountry(e)}
              className="absolute rounded-lg border border-gray-300 inset-y-0 left-0 pl-2 border-r-0 outline-none bg-gray-50"
            >
              {dialData.map((data, index) => (
                <option key={index} value={data.name}>
                  {data.dial_code}
                </option>
              ))}
            </select>
            <input
              type="text"
              onChange={(e) => changeNumber(e)}
              value={number}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 pl-[80px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-400"
                viewBox="0 0 23 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="email id"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Id*
          </label>
          <input
            type="email"
            value={emailId}
            onChange={(e) => changeEmail(e)}
            placeholder="John@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <label
              htmlFor="email id"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              State*
            </label>
            {country === "India" ? (
              <select
                value={stateAddress}
                onChange={(e) => changeStateAddress(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {Object.values(stateData).map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={stateAddress}
                onChange={(e) => changeStateAddress(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            )}
          </div>
          <div>
            <label
              htmlFor="email id"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country*
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => changeCountry(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-main hover:bg-purple-800 focus:ring-purple-800 focus:outline-none focus:bg-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save & Next Step
        </button>
      </form>
    </div>
  );
}
