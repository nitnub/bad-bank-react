import { Button } from 'react-bootstrap';
const SignInButton = ({ title }) => {

  return (
    <Button variant={'light'} href="#/SignIn/">{title}</Button>
  )

}

export default SignInButton;