import BankForm from './BankForm';
function Withdraw() {
  console.log('accessing Withdraw...');
  return (
    <div className="main-content">
      <BankForm 
        showAmount
      />
    </div>
  );
}

export default Withdraw;
