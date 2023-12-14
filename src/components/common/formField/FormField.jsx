import { ErrorMessage, Field, Form } from "formik";
import React from "react";
import { useLocation } from "react-router-dom";

const FormField = () => {
  const location = useLocation();
  const isAddUserLocation = location.pathname === "/";
  return (
    <>
      <Form className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="firstName"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="lastName"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="emailId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="emailId"
            name="emailId"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="emailId"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobileNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="mobileNo"
            name="mobileNo"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="mobileNo"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="country"
            name="country"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="country"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address 1 <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="address1"
            name="address1"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="address1"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address 2 (Optional)
          </label>
          <Field
            type="text"
            id="address2"
            name="address2"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="address2"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            State <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="state"
            name="state"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="state"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            City <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="city"
            name="city"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="city"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="zipcode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Zipcode <span className="text-red-500">*</span>
          </label>
          <Field
            type="text"
            id="zipcode"
            name="zipcode"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="zipcode"
            component="p"
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {isAddUserLocation ? "Submit" : "Update"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormField;
