<script>
  // Import Font
  import "@fontsource-variable/rubik";
  //Import icons
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  import { createCategoryMenu } from "../stores/CreateCategoryMenu";

  let categoryName;

  export async function createCategory() {
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryName }),
    });

    const data = await res.json();

    console.log(data);

    createCategoryMenu();
  }
</script>

<div
  class="create-category-container"
  transition:fade={{ delay: 250, duration: 300 }}
>
  <div class="create-category">
    <div class="top-section">
      <h2 class="create-category-heading">Create new category</h2>
    </div>
    <div class="bottom-section">
      <input bind:value={categoryName} id="category-name" />
      <div class="button-container">
        <button on:click={createCategory} class="logout-btn" id="confirm-button"
          >Create</button
        >
        <button on:click|preventDefault={createCategoryMenu} id="cancel-button"
          >Cancel</button
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .create-category-container {
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
  .create-category {
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
    justify-content: center;
  }
  .create-category-heading {
    color: $white;
    margin-top: 1rem;
  }
  .bottom-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #category-name {
    margin-top: 1rem;
    width: 15rem;
    height: 3rem;
    border-radius: 8px;
    outline: none;
    border: 2px solid $primary-color;
    padding-left: 0.5rem;
    font-size: 1.25rem;
    background-color: $gray;
    color: $white;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 3rem;
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
