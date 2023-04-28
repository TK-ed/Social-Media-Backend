import react ,{ useState } from 'react'
import Button from '../button/button'
import '../login/login.css'

function login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:6969/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

const Login = () => {
    return(
        <div>
            <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <button type='submit'>
      Login
    </button>
    {/* <Button /> */}
  </form>
</div>
        </div>
    )
}

export default Login