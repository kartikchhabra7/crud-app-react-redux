import * as yup from "yup";

export const validationSchema = yup.object().shape({
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
