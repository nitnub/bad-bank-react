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
  const isDisabled = (values) => {
    let disabled = false;
    Object.keys(values).forEach((value) =>
      values[value].length === 0 ? (disabled = true) : null
    );
    return disabled;
  };

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

              {props.showEmail && (
                <FormElement formik={formik} label="Email" type="email" />
              )}

              {props.showPassword && (
                <FormElement formik={formik} label="Password" type="password" />
              )}

              {props.showAmount && (
                <>
                  <div className="balance-display">
                    <h2>Balance</h2>
                    <h3>{intToCurrency(getCurrentUser(context).balance)}</h3>
                  </div>
                  <FormElement
                    formik={formik}
                    label={props.transferType}
                    // type="number"
                    // min="0" step="1"
                  />
                </>
              )}
              <div className="btn-container">
                <button
                  className="btn btn-dark"
                  disabled={isDisabled(formik.values)}
                  type="submit"
                >
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
