import Button from 'react-bootstrap/Button';

function LoginPage() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Button type="submit" variant="dark">Submit</Button>
    </form>
  )
}

export default LoginPage

