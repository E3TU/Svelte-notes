<script>
  import Icon from "@iconify/svelte";

  let isExpanded = false;

  function clickHandler() {
    isExpanded = !isExpanded;
  }
</script>

<div class="notes-container">
  <div class="action-bar">
    <button class="addnote-btn"
      ><Icon icon="ph:plus-bold" class="plussign-icon" />New Note</button
    >
    <nav class="dropdown-menu">
      <button on:click={clickHandler} class="dropdown-btn"
        >Sort By<Icon class="dropdown-icon" icon="fe:arrow-down" /></button
      >
      {#if isExpanded}
        <ul>
          <li>Name</li>
          <li>Date</li>
        </ul>
      {/if}
    </nav>
  </div>
</div>

<style lang="scss">
  .notes-container {
    margin: 1rem;
    background-color: $gray;
    height: 100%;
    border-radius: 12px;
    width: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .action-bar {
    display: flex;
    width: 100%;
    height: 4rem;
    // background-color: $white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 1rem;
    gap: 1rem;
  }
  .addnote-btn {
    width: 8rem;
    height: 3rem;
    background-color: $green;
    color: $white;
    border: 2px solid $green;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s;
  }
  .addnote-btn:hover {
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;
  }
  :global(.plussign-icon) {
    color: $white;
    font-size: 1rem;
    vertical-align: top;
    margin-right: 0.25rem;
  }
  .dropdown-btn {
    width: 6rem;
    height: 3rem;
    background-color: $primary-color;
    color: $white;
    border: 2px solid $primary-color;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s;
  }
  .dropdown-btn:hover {
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;
  }
  :global(.dropdown-icon) {
    margin-left: 0.25rem;
    vertical-align: top;
  }
  .dropdown-menu {
    color: $white;
    width: 8rem;
    ul {
      list-style: none;
      background-color: $bg-color;
      border-radius: 8px;
      margin-top: 0.5rem;
      // padding-right: 2rem;
      height: 7rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    li{
      padding: 0.5rem;
      font-size: 1rem;
      transition: 0.5s;
      cursor: pointer;
    }
    li:hover{
      background-color: #3e3e3e;
      border-radius: 8px;
    }

  }
</style>
