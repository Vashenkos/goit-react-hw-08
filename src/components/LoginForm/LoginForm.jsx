import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { selectIsLoadingAuth } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <motion.div
  
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoadingAuth && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form  autoComplete="off">
            <label >
              Email
              <Field
              
                type="email"
                name="email"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
              
              />
            </label>
            <label >
              Password
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                
              />
            </label>
            <button
              
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};