import React from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux";

export default function index() {
  const personalData = useSelector((state) => state.userState.userData);
  const [name, setName] = useState(personalData.name);
  const [number, setNumber] = useState(personalData.number);
  const [emailId, setEmailId] = useState(personalData.emailId);
  const [country, setCountry] = useState(personalData.country);
  const [stateAddress, setStateAddress] = useState(personalData.stateAddress);
  return (
    <div className="w-full max-w-md min-w-md p-4 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Personal
        </h5>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
          Details
        </h3>
      </div>
      <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Name
                </th>
                <td className="px-6 py-4">
                    {name}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mobile number
                </th>
                <td className="px-6 py-4">
                    {number}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Email Id
                </th>
                <td className="px-6 py-4">
                    {emailId}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Country
                </th>
                <td className="px-6 py-4">
                    {country}
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    State
                </th>
                <td className="px-6 py-4">
                    {stateAddress}
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
