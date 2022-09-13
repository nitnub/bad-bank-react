import { Field, ErrorMessage } from 'formik';

function FormElement({ formik, label, type }) {
  const labelLower = label.toLowerCase().replace(' ', '-');

  const name = labelLower === 'withdraw' || labelLower === 'deposit'  ? 'amount' : labelLower;
  return (
    <>
      <div className="form-section">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>

        <Field className="form-control" id={name} name={name} type={type} min="0"/>

        {formik.submitCount && formik.errors[name] ? (
          <ErrorMessage className="error-text" name={name}>
            {(msg) => <div className="error-text">{msg}</div>}
          </ErrorMessage>
        ) : (
          <div className="error-text">&nbsp;</div>
        )}
      </div>
    </>
  );
}

export default FormElement;
