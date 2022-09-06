import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Please enter a Name')
    .min(3, 'Name must be at least 3 characters long'),

  password: Yup.string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      `Password must have one each of: 
                Upper case
                Lower case
                Number (0-9)
                Special Character (#?!@$%^&*-)
                Must be at least 8 characters long`
    ), //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  email: Yup.string().required().email('Please enter a valid email address'),
  amount: Yup.number()
    .required('Please enter an amount')
    .positive('Please enter a whole number greater than zero')
    .integer('Please enter a whole number greater than zero'),
});

function BankForm() {
  return (
    <div className="card form-view">
      <div className="card-body">
        <Formik
          initialValues={{
            name: '',
            password: '',
            email: '',
            amount: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} noValidate>
              <div>
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <Field className="form-control" name="name" type="text" />
                <ErrorMessage className="error-text" name="name" >
                  {(msg) => <div className="error-text">{msg}</div>}
                </ErrorMessage>
              </div>

              <div>
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Field
                  className="form-control"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password" >
                  {(msg) => <div className="error-text">{msg}</div>}
                </ErrorMessage>
              </div>

              <div>
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <Field className="form-control" name="email" type="email" />
                <ErrorMessage name="email" >
                  {(msg) => <div className="error-text">{msg}</div>}
                </ErrorMessage>
              </div>

              <div>
                <label className="form-label" htmlFor="amount">
                  Amount
                </label>
                <Field className="form-control" name="amount" type="number" min='0' />
                <ErrorMessage name="amount">
                  {(msg) => <div className="error-text">{msg}</div>}
                </ErrorMessage>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BankForm;
