import BankForm from './BankForm';
function Withdraw() {
  console.log('accessing Withdraw...');
  return (
    <div className="main-content">
      <BankForm 
        showAmount
        showname
      />
    </div>
  );
}

export default Withdraw;
