<script>
  // Import components
  import Notes from "../../components/Notes.svelte";
  import Searchbar from "../../components/Searchbar.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import Createnotemodal from "../../components/Createnotemodal.svelte";

  // Import Store(s)
  import { createNoteMenu, isCreateNoteMenuOpen } from "../../stores/CreateNoteMenu";
  import { editNoteMenu, isEditNoteMenuOpen } from "../../stores/EditNoteMenu";
  import Editnotemodal from "../../components/Editnotemodal.svelte";
  
</script>

<div class="flex-container">
  <!--Show note creation modal when new note button is pressed-->
  {#if $isCreateNoteMenuOpen}
    <Createnotemodal />
  {/if}
  <!--Show note edit modal when edit note button is pressed-->
  {#if $isEditNoteMenuOpen}
    <Editnotemodal />
  {/if}
  <div class="flex-items-left">
    <Sidebar />
  </div>
  <div class="flex-items-right">
    <Searchbar />
    <!--Pass notecreationmenu and noteedit menu as props to notes component-->
    <Notes noteCreationMenu={createNoteMenu} noteEditMenu={editNoteMenu} />
  </div>
</div>

<style lang="scss">
  .flex-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    font-family: "Rubik Variable", sans-serif;
    z-index: 1000;
  }
  .flex-items-left {
    display: flex;
    flex-direction: column;
  }
  .flex-items-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
