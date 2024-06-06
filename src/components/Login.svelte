<div class="flex-container">
  <div class="login-container">
    <h1 class="login-heading">Login To Account</h1>
    <form id="loginform">
      <input id="email" type="text" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />
      <button id="login-btn">Login</button>
    </form>
  </div>
</div>

<style lang="scss">
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-color;
    height: 100vh;
    width: 100%;
  }
  .login-container {
    background-color: $gray;
    height: 35rem;
    width: 30rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .login-heading {
    color: $white;
    margin: 2rem;
    text-align: center;
    font-size: 1.75rem;
  }
  #loginform {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  input{
    padding: 1.25rem;
    width: 25rem;
    border-radius: 8px;
    border: none;
    background-color: $lighter-gray;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: $white;
    font-size: 1rem;
  }
  input::placeholder{
    color: $white;
    opacity: 0.7;
  }
  input:focus{
    outline: 2px solid $primary-color;
  }
  #email{
    margin-top: 2rem;
  }
  #login-btn{
    padding: 1rem 4rem;
    background-color: $primary-color;
    color: $white;
    border: none;
    border-radius: 6px;
    outline: 2px solid $primary-color;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 1rem;
    transition: 0.5s;
    margin-top: 1.25rem;
  }
  #login-btn:hover{
    background-color: transparent;
    outline: 2px solid $primary-color;
    transition: 0.5s;
  }
</style>
