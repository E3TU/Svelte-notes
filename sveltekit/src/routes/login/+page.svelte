<script>
import { account } from "$lib/appwrite";
import { user } from "../../stores/userStore";

  const login = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await user.login(formData.get('email'), formData.get('password'));

  }
</script>



<div class="login-flex-container">
    <div class="about-container">
        <div class="about">
            <div class="corner"></div>
            <h1 class="about-header">Notes App</h1>
            <p class="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    <form on:submit={login} class="login-form">
        <h1 class="title">Login</h1>
        <label class="email-label" for="email">Email</label>
        <input class="login-input" name="email" type="text" placeholder="Email" required />
        <label class="password-label" for="password">Password</label>
        <input class="login-input" name="password" type="password" placeholder="Password" required />
        <div class="bottom-wrapper">
            <label class="remember-me">Remember me
                <input type="checkbox">
            </label>
        </div>
        <button type="submit" data-type="login" class="login-button">Login</button>
    </form>
</div>

<style lang="scss">
    .login-flex-container {
      display: flex;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center;
      //background: rgb(0,11,181);
      //background: linear-gradient(73deg, rgba(0,11,181,1) 0%, rgba(35,143,186,1) 52%);
      background-image: url("bbblurry.svg");
    }
    .about-container {
      display: flex;
      align-items: center;
      height: 100%;
      flex: 1;
    }
    .about {
      background-color: $primary-color;
      height: 50rem;
      width: 35rem;
      margin-left: 5rem;
      border-radius: 12px;
      overflow: hidden;
      color: $white;
    }
    .corner{
      position: relative;
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: linear-gradient(to bottom left, #13518a, #13518a);
      clip-path: polygon(0 0, 100% 0, 0 100%);
      z-index: 1;
    }
    .about-header{
      padding-left: 2rem;
    }
    .about-text{
      padding-left: 2rem;
      padding-top: 1rem;
    }
    .login-form {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      color: $white;
      padding-top: 15rem;
      padding-left: 30rem;
    }
    .title{
      font-size: 2rem;
      padding: 1rem;
    }
    .email-label{
      padding-left: 1rem;
      padding-top: 0.5rem;
      font-size: 1.2rem;
    }
    .password-label{
      padding-left: 1rem;
      padding-top: 0.5rem;
      font-size: 1.2rem;
    }
    .login-input{
      margin: 1rem;
      padding: 1rem;
      border-radius: 8px;
      outline: none;
      height: 3.5rem;
      font-size: 1rem;
      background-color: $white;
      border: 3px solid transparent;
      color: $black;
      transition: 0.5s;
      width: 25rem;
    }
    .login-input:focus{
      border: 3px solid $primary-color;
      transition: 0.5s;
    }
    .bottom-wrapper{
      display: flex;
      flex-direction: row;
    }
    .remember-me{
      font-size: 1rem;
      padding-left: 1rem;
      input{
        margin-left: 0.25rem;
      }
    }
    .login-button{
      margin: 1rem;
      padding: 1rem;
      border-radius: 8px;
      border: 2px solid transparent;
      outline: none;
      background-color: $primary-color;
      color: $white;
      font-size: 1rem;
      width: 25rem;
      transition: 0.5s;
    }
    .login-button:hover{
      border: 2px solid $primary-color;
      background-color: transparent;
      cursor: pointer;
      transition: 0.5s;
    }
</style>