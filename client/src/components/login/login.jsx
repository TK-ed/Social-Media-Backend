import { useState } from 'react'
import '../login/login.css'


const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	const handleSubmit = async (event) => {
	  console.log('All Clear!!!');
	  event.preventDefault();
	  const response = await fetch('http://localhost:6969/api/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	  });
	//   console.log(response);
	  const data = await response.json();
	  response.send(data);
	  setEmail(data);
	  setPassword(data);
	  // Redirect to protected route
	};


    return(
      <div>

<h2>Wink!!</h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={handleSubmit}>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Name" />
			<input type="email" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={handleSubmit}>
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
			<input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
			<a href="#">Forgot your password?</a>
			<button type='submit'>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>

      </div>

    )
}

export default Login

