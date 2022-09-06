import BankForm from './BankForm';
function CreateAccount() {
  console.log('accessing CreateAccount...');
  return (
    <div className="main-content">
          <h1 className="content-header">Create Account</h1>
      <BankForm 
        showName
        showEmail
        showPassword
      />
    </div>
  );
}

export default CreateAccount;
