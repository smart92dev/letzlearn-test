import React from "react";
import { useState } from "react";

export default function index(props) {
  const { courseNo, prev } = props;
  const numberArr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [language, setLanguage] = useState("");
  const [reason, setReason] = useState("");

  const changeLevel = (e) => {
    setLevel(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeSkill = (e) => {
    setSkill(e.target.value);
  };

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const changeReason = (e) => {
    setReason(e.target.value);
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-3" action="#">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Course
          </h5>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            {numberArr[courseNo - 1]}
          </h3>
        </div>
        <div>
          <label
            htmlFor="course level"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Level*
          </label>
          <input
            type="text"
            onChange={(e) => changeLevel(e)}
            value={level}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="course name"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Name*
          </label>
          <input
            type="text"
            onChange={(e) => changeName(e)}
            value={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="expected skills"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Expected Skills*
          </label>
          <input
            type="text"
            onChange={(e) => changeSkill(e)}
            value={skill}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="preferred language"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Preferred Language*
          </label>
          <input
            type="text"
            onChange={(e) => changeLanguage(e)}
            value={language}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="reason"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Why do u want to join us?
          </label>
          <input
            type="text"
            onChange={(e) => changeReason(e)}
            value={reason}
            className="min-h-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex flex-row gap-1">
          <span
            onClick={() => prev()}
            className="text-white text-[30px] w-[112px] pt-[7px] cursor-pointer bg-slate-300 hover:bg-main focus:ring-main focus:outline-none focus:bg-main font-medium rounded-[100px] text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            &lt;
          </span>
          <button
            type="submit"
            className="flex flex-row items-center gap-2 w-full text-white bg-main hover:bg-purple-800 focus:ring-purple-800 focus:outline-none focus:bg-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>
              Add Course
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-white"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  fill="white"
                ></path>{" "}
              </svg>
            </span>
          </button>
          <button className="w-full text-white bg-main hover:bg-purple-800 focus:ring-purple-800 focus:outline-none focus:bg-main font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
