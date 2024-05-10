<script>
  import Icon from "@iconify/svelte";
  // Dropdown Menu
  let isExpanded = false;

  function clickHandler() {
    isExpanded = !isExpanded;
  }

  // Other Logic
  let notes = [];
  let title = "";
  let content = "";
  let dateCreated = "";

  function addNote() {
    const note = {
      title: title,
      content: content,
      Created: dateCreated,
      // Modified: ,
    };

    notes = [...notes, note];
    newNote = "";
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
  <div class="notes-wrapper">
    <!--Notes go here grrrrr pau pau-->
    <div class="note">
      <h1 class="title">Note</h1>
      <p class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
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
    z-index: 1;
    ul {
      list-style: none;
      background-color: $bg-color;
      border-radius: 8px;
      margin-top: 0.5rem;
      // padding-right: 2rem;
      height: 7rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    li {
      padding: 0.5rem;
      font-size: 1rem;
      transition: 0.5s;
      cursor: pointer;
    }
    li:hover {
      background-color: #3e3e3e;
      border-radius: 8px;
    }
  }
  .notes-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    padding: 2rem 1rem;
  }
  .note {
    display: flex;
    flex-direction: column;
    background-color: $bg-color;
    color: $white;
    height: 20rem;
    width: 15rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
  }
  .note::-webkit-scrollbar-thumb {
    background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }
  .title {
    padding: 0.5rem 1rem;
  }
  .content {
    padding: 0.25rem 1.1rem;
  }
</style>
