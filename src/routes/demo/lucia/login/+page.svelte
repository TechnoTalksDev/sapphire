<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<!--
<div class="container h-screen w-full mx-auto flex flex-col justify-center items-center">


<h1>Login/Register</h1>
<form method="post" action="?/login" use:enhance class = "auth-form active">
	<label>
		Username
		<input name="username" class="input" />
	</label>
	<label>
		Password
		<input type="password" name="password" class="input"/>
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>
</div>
-->

<div class="login-container">
  <div class="login-card">
      <div class="auth-tabs">
          <div class="auth-tab active">Login / Register</div>
      </div>

      <form method="post" action="?/login" use:enhance class="auth-form active">
          <div class="form-group">
              <label for="loginEmail">Username</label>
              <div class="input-group">
                  <i class="fas fa-envelope"></i>
                  <input name="username" id="loginEmail" class="form-control" required placeholder="Student">
              </div>
          </div>
          <div class="form-group">
              <label for="loginPassword">Password</label>
              <div class="input-group">
                  <i class="fas fa-lock"></i>
                  <input name="password" type="password" id="loginPassword" class="form-control" required placeholder="Enter your password">
              </div>
          </div>
          <button type="submit" class="submit-btn">Login</button>
					<button type="submit" class="!mt-2 submit-btn" formaction="?/register">Register</button>
          <div class="form-footer">
              <a href="#">Forgot password?</a>
							<p style="color: red">{form?.message ?? ''}</p>
          </div>
					
      </form>


  </div>
</div>

<style>
        :root {
            --primary: #4A90E2;
            --secondary: #6C63FF;
            --success: #2ECC71;
            --background: #ffffff;
            --text: #333333;
            --card-bg: #f8f9fa;
            --border: #e1e4e8;
            --modal-overlay: rgba(0, 0, 0, 0.5);
        }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: background-color 0.3s, color 0.3s;
  }

  body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
  }

  nav {
      background-color: var(--card-bg);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary);
      text-decoration: none;
  }

  .nav-links {
      display: flex;
      gap: 2rem;
  }

  .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
  }

  .nav-links a:hover {
      color: var(--primary);
  }

  .theme-toggle {
      background: none;
      border: none;
      color: var(--text);
      cursor: pointer;
      font-size: 1.2rem;
  }

  .login-container {
      max-width: 400px;
      margin: auto auto;
      padding: 0 1rem;
      flex-grow: 1;
  }

  .login-card {
      background-color: var(--card-bg);
      border-radius: 10px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .auth-tabs {
      display: flex;
      margin-bottom: 2rem;
      border-bottom: 2px solid var(--border);
  }

  .auth-tab {
      flex: 1;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      color: var(--text);
      opacity: 0.7;
      transition: opacity 0.3s, color 0.3s;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
  }

  .auth-tab.active {
      opacity: 1;
      color: var(--primary);
      border-bottom-color: var(--primary);
  }

  .form-group {
      margin-bottom: 1.5rem;
  }

  .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text);
  }

  .input-group {
      position: relative;
  }

  .input-group i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text);
      opacity: 0.5;
  }

  .form-control {
      width: 100%;
      padding: 0.75rem;
      padding-left: 2.5rem;
      border: 1px solid var(--border);
      border-radius: 5px;
      background-color: var(--background);
      color: var(--text);
      transition: border-color 0.3s, box-shadow 0.3s;
  }

  .form-control:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  .submit-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
  }

  .submit-btn:hover {
      background-color: var(--secondary);
      transform: translateY(-2px);
  }

  .form-footer {
      text-align: center;
      margin-top: 1.5rem;
  }

  .form-footer a {
      color: var(--primary);
      text-decoration: none;
  }

  .social-login {
      margin-top: 2rem;
      text-align: center;
  }

  .social-login p {
      margin-bottom: 1rem;
      color: var(--text);
      opacity: 0.7;
  }

  .social-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
  }

  .social-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--background);
      color: var(--text);
      border: 1px solid var(--border);
      cursor: pointer;
      transition: transform 0.3s, background-color 0.3s;
  }

  .social-btn:hover {
      transform: translateY(-2px);
      background-color: var(--primary);
      color: white;
  }

  .auth-form {
      display: none;
  }

  .auth-form.active {
      display: block;
  }

  footer {
      background-color: var(--card-bg);
      padding: 2rem;
      text-align: center;
      margin-top: auto;
  }

  .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem;
  }

  .footer-links a {
      color: var(--text);
      text-decoration: none;
  }

  @media (max-width: 768px) {
      .nav-links {
          display: none;
      }
  }
</style>