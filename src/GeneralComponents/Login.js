import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import brandImage from "../photo/brand.png";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  return (
    <div className="container d-flex justify-content-center">
      <div className="row justify-content-center align-items-center w-50 border rounded mt-5 p-5 shadow">
        <div className="row">
          <div
            id="brand"
            className="container d-flex justify-content-center align-items-center mt-1 mb-4"
          >
            <img id="brand_img" alt="" src={brandImage}></img>
            <span id="brand_name">HERA</span>
          </div>
        </div>

        <div className=" row justify-content-center p-3 border  w-75 rounded shadow">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-md-6">
              <button className="btn btn-success m-2 w-100">Sign Up</button>
            </div>

            <div className="col-md-6">
              <button className="btn btn-success m-2 w-100">Login</button>
            </div>
          </div>

          <div className="row justify-content-center align-items-center mt-4 w-100">
            <Formik
              validationSchema={schema}
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form noValidate  onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationFormik02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </Form.Group>
                  <Link to="/">
                  <Button
                    variant="variant"
                    type="submit"
                    className="w-100 mt-3 btn-outline-primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
