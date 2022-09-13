import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormElement from './FormElement';
import UserContext from '../../contexts/UserContext';
import intToCurrency from '../../utils/intToCurrency';
import getCurrentUser from '../../utils/getCurrentUser';
import getValidationSchema from '../../utils/getValidationSchema';
import getInitialValues from '../../utils/getInitialValues';

function BankForm(props) {


  const context = useContext(UserContext);
  const validationSchema = Yup.object(getValidationSchema(props));

  const clearForm = () => {};
  return (
    <div className="card form-view">
      <div className="card-body">
        <Formik
          initialValues={getInitialValues(props)}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            props.handler(values);
            resetForm();
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} noValidate>
              {props.showName && (
                <FormElement formik={formik} label="Name" type="text" />
              )}

              {props.showPassword && (
                <FormElement formik={formik} label="Password" type="password" />
              )}

              {props.showEmail && (
                <FormElement
                  formik={formik}
                  label="Email"
                  type="email"
                />
              )}

              {props.showAmount && (
                <>
                  <div className="balance-display">
                    <h2>Balance</h2>
                    <h3>{intToCurrency(getCurrentUser(context).balance)}</h3>
                  </div>
                  <FormElement formik={formik} label={props.transferType} type="number" />
                </>
              )}
              <div className="btn-container">
                <button className="btn btn-primary" type="submit">
                  {props.buttonText ? props.buttonText : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BankForm;
