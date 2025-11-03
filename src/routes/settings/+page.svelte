<script>
  import Icon from "@iconify/svelte";
  import Pagetransitions from "../../components/Pagetransitions.svelte";
  import {
    userName,
    fetchUserName,
    updateUsername,
    currentPassword,
    newPassword,
  } from "../../stores/account";
  import { onMount } from "svelte";

  onMount(() => {
    fetchUserName();
  });

  let showCurrentPassword = false;
  let showNewPassword = false;

  function toggleCurrentPasswordVisibility() {
    showCurrentPassword = !showCurrentPassword;
  }

  function toggleNewPasswordVisibility() {
    showNewPassword =! showNewPassword;
  }


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
      <form
        class="change-user-data-form"
        on:submit|preventDefault={updateUsername}
      >
        <div class="username-wrapper">
          <h2>Change Username</h2>
          <label for="change-username">Username</label>
          <input
            name="change-username"
            id="change-username"
            bind:value={$userName}
          />
        </div>
        <div class="password-wrapper">
          <h2>Change Password</h2>
          <label for="change-password">Current Password</label>
          <div class="input-wrapper">
            <input type={showCurrentPassword ? 'text' : 'password'} id="change-password" />
            <button type="button" on:click={toggleCurrentPasswordVisibility} class="show-password-btn"> <Icon icon="mdi:show" class="show-password" /> </button>
          </div>
          <label for="new-password">New Password</label>
          <div class="input-wrapper">
            <input type={showNewPassword ? 'text' : 'password'} id="new-password" />
            <button type="button" on:click={toggleNewPasswordVisibility} class="show-password-btn"> <Icon icon="mdi:show" class="show-password" /> </button>
          </div>
        </div>
        <button type="submit" id="save-btn">Save Changes</button>
      </form>
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
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  .show-password-btn{
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  :global(.show-password) {
    color: $white;
    font-size: 1.5rem;
    margin: 1rem 0rem 0rem 0.5rem;
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
  .change-user-data-form {
    background-color: $dark-gray;
    width: auto;
    height: auto;
    padding: 5rem;
    border-radius: 12px;
  }
</style>
