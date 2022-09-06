import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
function BankForm(props) {
  const {
    showName,
    showEmail,
    showPassword,
    showAmount,
    showBalance,
    handler,
    color,
    title,
  } = props;



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
         
          event.preventDefault()
          event.stopPropagation()
        }
        console.log('event', form.checkValidity())
        form.classList.add('was-validated')
      }, false)
    })
})()



  // const [show, setShow] = useState(true);
  // const [status, setStatus] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [amount, setAmount] = useState('0');
  // const ctx = useContext(UserContext);

  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      amount: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.email) errors.email = 'Required';
      if (!values.password) errors.password = 'Required';
      if (!values.amount) errors.amount = 'Required';
      return errors;
    },
  });

  // TEST
  useEffect(() => {
    const foo = () => {
      console.log(formik.values.name);
    };
    foo();
  }, [formik.values.name]);
  // console.log(formik.errors);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {/* <div className="mb-2"> */}
          <div className="col-md-1">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            {/* <br /> */}
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          {/* <div className="mb-2"> */}
          <div className="col-md-1">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              // className="is-invalid"
              className="error-field"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="error-text">Error!</div>
            ) : (
              <div className="error-text"> &nbsp;</div>
            )}
          </div>

          {/* <div className="mb-2"> */}
          <div className="col-md-1">
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          {/* <div className="mb-2"> */}
          <div className="col-md-1">
            <label htmlFor="amount">Amount</label>
            <br />
            <input
              id="amount"
              name="amount"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </div>
          {/* <div className="mb-2"> */}
          <div className="col-md-1">
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  console.log('form end');
  // return <SignupForm />;
  // const [validationErrors, setValidationErrors] = React.useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   amount: '',
  // });

  // const handleFormValidation = (formData) => {
  //   const validationErrorsCopy = { ...validationErrors };
  // };

  // function clearForm() {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setAmount(0);
  //   setShow(true);
  // }

  // function onSubmit(e) {
  //   e.preventDefault();
  //   // TODO: Check form validation
  //   handler(ctx, { name, email, password });
  //   clearForm();
  // }

  // return (
  //   <Card
  //     bgColor={color}
  //     header={title}
  //     status={status}
  //     body={
  //       <form onSubmit={(e) => onSubmit(e)}>
  //         {showName && (
  //           <>
  //             Name1
  //             <br />
  //             <input
  //               type="input"
  //               className="form-control"
  //               id="name"
  //               placeholder="Enter name"
  //               value={name}
  //               onChange={(e) => setName(e.currentTarget.value)}
  //             />
  //             <div className="form-spacer" />
  //           </>
  //         )}
  //         {showEmail && (
  //           <>
  //             Email
  //             <br />
  //             <input
  //               type="input"
  //               className="form-control"
  //               id="email"
  //               placeholder="Enter email"
  //               value={email}
  //               onChange={(e) => setEmail(e.currentTarget.value)}
  //             />
  //             <div className="form-spacer" />
  //           </>
  //         )}
  //         {showPassword && (
  //           <>
  //             Password
  //             <br />
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="password"
  //               placeholder="Enter password"
  //               value={password}
  //               onChange={(e) => setPassword(e.currentTarget.value)}
  //             />
  //             <div className="form-spacer" />
  //           </>
  //         )}
  //         {showBalance && (
  //           <>
  //             <h2>Balance</h2>
  //             <h3>{formatAsCurrency(getCurrentUser(ctx).balance)}</h3>
  //           </>
  //         )}
  //         {showAmount && (
  //           <>
  //             {`${title} Amount`}
  //             <br />
  //             <input
  //               type="number"
  //               className="form-control amount"
  //               id="amount"
  //               placeholder={`${title} Amount`}
  //               min="0"
  //               value={amount}
  //               onChange={(e) => setAmount(e.currentTarget.value)}
  //             />
  //             <div className="form-spacer" />

  //             {/*  */}

  //             <div className="input-group mb-3">
  //               <span className="input-group-text currency">$</span>
  //               <input
  //                 type="text"
  //                 className="form-control amount"
  //                 id="amount"
  //                 aria-label="Amount (to the nearest dollar)"
  //                 placeholder={`${title} Amount`}
  //                 min="0"
  //                 value={formatAsCurrency(amount)}
  //                 onChange={(e) => setAmount(e.currentTarget.value)}
  //               />
  //               <span className="input-group-text decimal">.00</span>
  //             </div>

  //             {/*  */}
  //           </>
  //         )}

  //         {handler && (
  //           <>
  //             <div className="modal-dialog modal-dialog-centered">qsqs</div>
  //             <button
  //               type="submit"
  //               className="btn btn-light"
  //               disabled={showAmount ? amount === '0' : false}
  //             >
  //               {title}
  //             </button>
  //           </>
  //         )}
  //       </form>
  //     }
  //   />
  // );
}
export default BankForm;
