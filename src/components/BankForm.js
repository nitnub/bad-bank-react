import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
            .required('Please enter a Name')
            .min(3, 'Name must be at least 3 characters long'),
            
  password: Yup.string()
            .required()
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 
              `Password must have one each of: 
                Upper case
                Lower case
                Number (0-9)
                Special Character (#?!@$%^&*-)
                Must be at least 8 characters long`), //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  email: Yup.string()
            .required() 
            .email('Please enter a valid email address'),
  amount: Yup.number()
            .required('Please enter a whole number greater than zero')
            .positive('Please enter a whole number greater than zero')
            .integer('Please enter a whole number greater than zero'),
});

const BankForm = () => {
  return (
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
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="amount">Amount</label>
          <Field name="amount" type="number" />
          <ErrorMessage name="amount" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BankForm;
