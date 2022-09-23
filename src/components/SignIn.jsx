import BankForm from './Form/BankForm';
import BankModal from './BankModal';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/UserContext';
import { setActiveNavLink } from '../utils/util';
function SignIn() {
  const context = useContext(UserContext);
  const [initialAccount, setInitialAccount] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });

  useEffect(() => {
    setActiveNavLink('nav-create-account')
  },[])
  
  console.log('accessing CreateAccount...');
  console.log('Context: ', context);

  const addUser = (args) => {
    const id = context.users.length;
    // const { name }
    // const email = args['email-address']
    const newUser = { id, ...args, balance: 0 };

    context.users.push(newUser);
  };
  const handler = (args) => {
    const verifyUser = (userEmail, userPassword) => {
      let matchingUser = false;
      context.users.forEach((customer) => {
        
        if (customer.email === userEmail && customer.password === userPassword) {
          matchingUser = true;
          context.currentUser = customer.id;
        }

       
      })
      return matchingUser;
    }
    if (verifyUser(args.email, args.password)) {


      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Success!',
          header: `User ${args.email} created`,
          body: ``,
        };
      });
  
      console.log(args);
  
      console.log('Context: ', context);
      setInitialAccount(() => false);
      setModalVisible(() => true);



    }
    console.log('args', args)
    console.log('context', context)

    console.log('Logging from Sign In...');
    

 
  };



  return (
    <div className="main-content">
      <h1 className="content-header">Sign In</h1>
      <BankForm
    
        showEmail
        showPassword
        buttonText={'Sign In'}
        handler={handler}
      />
      
      <BankModal
        show={modalVisible}
        modalmessage={{ ...modalmessage }}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default SignIn;
