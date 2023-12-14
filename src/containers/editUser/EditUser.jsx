import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { updateUser } from "../../store/userSlicer";
import axios from "axios";
import FormField from "../../components/common/formField/FormField";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const API_URL_WITH_ID = `http://localhost:5000/user/${id}`;
  const validationSchema = yup.object().shape({
    firstName: yup.string().max(15).min(6).required(),
    lastName: yup.string().max(9).min(6).required("Last name is required"),
    emailId: yup.string().email().required(),
    mobileNo: yup.string().max(11).min(10).required(),
    country: yup.string().max(15).required(),
    address1: yup.string().min(4).max(50).required(),
    address2: yup.string().max(15),
    state: yup.string().max(15).required(),
    city: yup.string().max(15).required(),
    zipcode: yup.number().max(999999).required(),
  });

  useEffect(() => {
    const getApiData = async () => {
      const result = await fetch(API_URL_WITH_ID);
      const response = await result.json();
      setUserData(response);
    };

    getApiData();
  }, [API_URL_WITH_ID]);

  const submitForm = async (values) => {
    try {
      dispatch(updateUser({ id, ...values }));

      const response = await axios.put(API_URL_WITH_ID, values);

      window.location.reload();
      return response;
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  const initialValues = {
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    emailId: userData.emailId || "",
    mobileNo: userData.mobileNo || "",
    country: userData.country || "",
    address1: userData.address1 || "",
    address2: userData.address2 || "",
    state: userData.state || "",
    city: userData.city || "",
    zipcode: userData.zipcode || "",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Edit User</h1>
      {Object.keys(userData).length > 0 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          <FormField />
        </Formik>
      )}
    </div>
  );
};

export default EditUser;
