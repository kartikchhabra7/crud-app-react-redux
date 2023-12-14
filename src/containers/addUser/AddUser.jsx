import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import axios from "axios";
import { addUser } from "../../store/userSlicer";
import { validationSchema } from "../../utils/helper/validation";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/common/formField/FormField";
import { API_BASE_URL } from "../../utils/constants/constants";
function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    country: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipcode: "",
  };

  /** 
     function submitForm(values, actions) {
       console.table("Form values:", values);
       actions.resetForm();
     }
  */
  const submitForm = async (values, actions) => {
    try {
      /**  for Manually generate a unique ID
      const newUserId = Date.now();

      Add the generated ID to the form values     ,working now for better optimization
     const userWithId = { ...values, userId: newUserId };
      */

      const userWithId = { ...values };

      dispatch(addUser(userWithId));

      const response = await axios.post(
        API_BASE_URL,
        userWithId
      );

      actions.resetForm(); // Reset the form when data will be sumbitted
      navigate("/show-user"); // when data will be added then it goes to the show user page
      return response;
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Add User</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        <FormField />
      </Formik>
    </div>
  );
}

export default AddUser;
