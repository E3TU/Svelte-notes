<script>
  //Import font
  import "@fontsource-variable/rubik";

  //Import icons
  import Icon from "@iconify/svelte";
  // Dropdown Menu
  let isExpanded = false;
  function clickHandler(e) {
    e.stopPropagation();
    isExpanded = !isExpanded;
  }

  import { notes, deleteNote } from "../stores/notesStore";

  // Other Logic
  // let notes = [];
  // let noteId = 1;

  // function addNote() {
  //   const note = {
  //     id: noteId++,
  //     title: "Test",
  //     content: "test",
  //     Created: Date.now(),
  //   };

  //   notes = [...notes, note];
  //   console.log(notes);
  // }

  // function deleteNote(id) {
  //   notes = notes.filter((note) => note.id !== id);
  //   console.log(notes);
  // }
  export let createNoteMenu;
</script>

<div class="notes-container">
  <div class="action-bar">
    <button class="createnote-btn" on:click={createNoteMenu}
      ><Icon icon="ph:plus-bold" class="plussign-icon" />New Note</button
    >
    <nav class="dropdown-menu">
      <button on:click|preventDefault={clickHandler} class="dropdown-btn"
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
    {#each $notes as note (note.id)}
      <div class="note">
        <h1 class="title">{note.title}</h1>
        <p class="content">{note.content}</p>
        <div class="control-buttons">
          <button id="edit-note">
            <Icon class="edit-btn" icon="material-symbols:edit-outline" />
          </button>
          <button
            id="delete-note"
            on:click={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            <Icon class="delete-btn" icon="ic:outline-delete" />
          </button>
        </div>
      </div>
    {/each}
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
    font-family: 'Rubik Variable', sans-serif;
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
  .createnote-btn {
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
  .createnote-btn:hover {
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
  }
  .note {
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: $bg-color;
    color: $white;
    height: 20rem;
    width: 15rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-y: auto;
  }
  .note::-webkit-scrollbar {
    border-radius: 10px;
    scrollbar-width: thin;
  }
  .note::-webkit-scrollbar-thumb {
    background-color: $lighter-gray;
    border-radius: 8px;
  }
  .note::-webkit-scrollbar-track {
    background-color: #151515;
    border-radius: 8px;
  }
  .title {
    padding: 0.5rem 1rem;
  }
  .content {
    padding: 0.25rem 1.1rem;
  }
  .control-buttons {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: flex-end;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
  #edit-note {
    background: transparent;
    border: none;
  }
  #edit-note:hover {
    cursor: pointer;
  }
  #delete-note {
    background: transparent;
    border: none;
  }
  #delete-note {
    cursor: pointer;
  }
  :global(.edit-btn) {
    font-size: 1.5rem;
    color: $primary-color;
    transition: 0.5s;
  }
  :global(.edit-btn):hover {
    opacity: 0.5;
  }
  :global(.delete-btn) {
    font-size: 1.5rem;
    color: $red;
    margin-left: 0.5rem;
    transition: 0.5s;
  }
  :global(.delete-btn):hover {
    opacity: 0.5;
  }
</style>
