import BankForm from './BankForm';
function Withdraw() {
  console.log('accessing Withdraw...');
  return (
    <div className="main-content">
          <h1 className="content-header">Deposit</h1>
      <BankForm 
        showAmount
        showname
      />
    </div>
  );
}

export default Withdraw;
