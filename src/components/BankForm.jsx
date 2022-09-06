import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormElement from './FormElement';

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

function BankForm({ showName, showPassword, showEmail, showAmount }) {
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
              {showName && <FormElement formik={formik} label="Name" type="text" />}

              {showPassword && <FormElement formik={formik} label="Password" type="password" />}

              {showEmail && <FormElement formik={formik} label="Email Address" type="email" />}
              
              {showAmount && <FormElement formik={formik} label="Amount" type="number" />}

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BankForm;
