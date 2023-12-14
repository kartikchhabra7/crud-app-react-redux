import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL, CONFIRM_POPUP } from "../../utils/constants/constants";

const ShowUser = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  async function getDataFromApi() {
    /** const result = await fetch(API_BASE_URL);
        const response = await result.json();
        setApiData(response)
    */ 
    // const { data } = await axios.get(API_BASE_URL); //data is a reserved in axios
    const result = await axios.get(API_BASE_URL);
    setApiData(result.data);
  }
  useEffect(() => {
    getDataFromApi();
  }, []);

  const handleDelete = async (id) => {
    const shouldDeleteData = window.confirm(CONFIRM_POPUP);
    try {
      if (shouldDeleteData) {
        await axios.delete(`${API_BASE_URL}/${id}`);
        getDataFromApi();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      <div>
        <h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 ms-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            CREATE
          </button>
        </h1>
      </div>
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                FirstName
              </th>
              <th scope="col" className="px-6 py-3">
                LastName
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col"></th>
              <th scope="col" colSpan={2} className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((value, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {value.id}
                  </th>
                  <td className="px-6 py-4">{value.firstName}</td>
                  <td className="px-6 py-4">{value.lastName}</td>
                  <td className="px-6 py-4">{value.emailId}</td>
                  <td className="px-6 py-4">{value.mobileNo}</td>
                  <td className="px-6 py-4">
                    <Link to={`/edit/${value.id}`}>
                      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(value.id)}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowUser;
