<script>

  //Import icon
  import Icon from "@iconify/svelte";

  import { searchTerm } from "../stores/searchStore";

</script>

<div class="searchbar">
  <input bind:value={$searchTerm} type="text" placeholder="Search For Note..." />
  <button id="search-btn"
    ><Icon icon="grommet-icons:search" color="#fff" /></button
  >
</div>

<style lang="scss">
  .searchbar {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    width: 98%;
    height: 4rem;
    margin: 1rem;
    border-radius: 12px;
    font-family: "Rubik Variable", sans-serif;
  }
  input {
    background-color: $dark-gray;
    border: 2px solid transparent;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    color: $white;
    padding: 1rem;
    font-size: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    outline: none;
  }
  input:focus {
    border: 2px solid $primary-color;
    transition:
      border-top-color 0.1s linear,
      border-right-color 0.1s linear 0.07s,
      border-bottom-color 0.1s linear 0.14s,
      border-left-color 0.1s linear 0.2s;
  }
  ::placeholder {
    color: $white;
    opacity: 0.8;
  }
  #search-btn {
    font-size: 1rem;
    margin-left: 2rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
    border-radius: 12px;
    background-color: $primary-color;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid $primary-color;
    transition: 0.5s;
  }
  #search-btn:hover {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid $primary-color;
    transition: 0.5s;
  }
</style>
