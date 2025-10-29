<script>
  //Import icons
  import { fade } from "svelte/transition";

  import { closeModal } from "../stores/modalStore";
</script>

<div class="logout-container" transition:fade={{ delay: 250, duration: 300 }}>
  <div class="logout-confirm">
    <div class="top-section">
      <h2 class="logout-heading">Logout confirmation</h2>
    </div>
    <div class="bottom-section">
      <p class="logout-text">Are you sure you want to log out?</p>
      <div class="button-container">
        <form class="logout-form" method="post">
          <button class="logout-btn" type="submit" id="confirm-button"
            >Confirm</button
          >
        </form>
        <button on:click|preventDefault={closeModal} id="cancel-button"
          >Cancel</button
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .logout-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(2px); /* Blurs the background */
    font-family: "Rubik Variable", sans-serif;
  }
  .logout-confirm {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 20rem;
    height: 15rem;
    background-color: $bg-color;
    border-radius: 12px;
    border: 3px solid $primary-color;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.8) 0px 2px 16px 0px;
    color: $white;
    cursor: default !important;
  }
  .top-section {
    display: flex;
    flex-direction: row;
  }
  .logout-heading {
    color: $white;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .bottom-section {
    display: flex;
    flex-direction: column;
  }
  .logout-text {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 4rem;
    justify-content: center;
    gap: 2rem;
  }
  #confirm-button {
    border: 2px solid $primary-color;
    background-color: $primary-color;
    color: $white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 100%;
    transition: 0.5s;
  }
  #confirm-button:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.5s;
  }
  #cancel-button {
    border: 2px solid $primary-color;
    background-color: transparent;
    color: $white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 100%;
    transition: 0.5s;
  }
  #cancel-button:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.5s;
  }
</style>
