<script>
  import Icon from "@iconify/svelte";
  import Pagetransitions from "../../components/Pagetransitions.svelte";

  export let data;
  const { user } = data;
  let username = user.name;
</script>

<Pagetransitions>
  <div class="settings-container">
    <div class="top-wrapper">
      <a class="back-button" href="/app"
        ><Icon
          class="back-button-icon"
          icon="weui:back-filled"
          width="32"
          height="32"
        /></a
      >
      <h1>Settings</h1>
    </div>
    <div class="bottom-wrapper">
      <div class="form">
        <div class="username-wrapper">
          <h2>Change Username</h2>
          <label for="change-username">Username</label>
          <input id="change-username" bind:value={username} />
        </div>
        <div class="password-wrapper">
          <h2>Change Password</h2>
          <label for="change-password">Password</label>
          <input id="change-password" />
          <label for="new-password">New Password</label>
          <input id="new-password" />
        </div>
        <button id="save-btn">Save Changes</button>
      </div>
    </div>
  </div>
</Pagetransitions>

<style lang="scss">
  .settings-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .top-wrapper {
    display: flex;
    align-items: center;
    width: 12rem;
    margin-top: 5rem;
    margin-left: 10rem;
  }
  h1 {
    color: $white;
  }
  .back-button {
    background: transparent;
    background-color: transparent;
    outline: none;
    border: none;
  }
  :global(.back-button-icon) {
    margin-right: 0.5rem;
    color: $white;
  }
  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10rem 25rem 10rem 25rem;
    flex: 1;
    h2 {
      color: $white;
      height: 2rem;
      width: 13rem;
    }
    label {
      margin-top: 1rem;
      color: $white;
    }
    input {
      margin-top: 1rem;
      background-color: transparent;
      width: 20rem;
      outline: none;
      border: 2px solid $primary-color;
      color: $white;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      transition: 0.5s;
    }
    input:focus {
      border: 2px solid $green;
      transition: 0.5s;
    }
  }
  .username-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  .password-wrapper {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  #save-btn {
    width: 9rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: $green;
    border: 2px solid transparent;
    color: $white;
    font-size: 1rem;
    transition: 0.5s;
    cursor: pointer;
  }
  #save-btn:hover {
    background-color: transparent;
    border: 2px solid $green;
    transition: 0.5s;
  }
  .form {
    background-color: $dark-gray;
    width: auto;
    height: auto;
    padding: 5rem;
    border-radius: 12px;
  }
</style>
