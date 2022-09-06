import React from 'react';
import { Formik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const BankForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     password: '',
  //     email: '',
  //     amount: '',
  //   },
  //   validate,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // console.log(formik.errors.name);
  // console.log(formik.touched.name);
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        email: '',
        amount: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          // name="name"
          type="text"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          // name="password"
          type="password"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.password}
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          // name="email"
          type="email"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          // name="amount"
          type="number"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.amount}
          {...formik.getFieldProps('amount')}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div>{formik.errors.amount}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </Formik>
  );
};

export default BankForm;
