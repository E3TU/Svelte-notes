<!-- Notes app main page. This page can only be accessed by authenticated users -->

<script>
  // Import components
  import Notes from "../../components/Notes.svelte";
  import Searchbar from "../../components/Searchbar.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import CreateCategorymodal from "../../components/CreateCategorymodal.svelte";
  import Createnotemodal from "../../components/Createnotemodal.svelte";
  import Editnotemodal from "../../components/Editnotemodal.svelte";
  import LogoutconfirmModal from "../../components/LogoutconfirmModal.svelte";

  // Import page transitions compoonent that is used to have animations between component transtitions
  import Pagetransitions from "../../components/Pagetransitions.svelte";

  import { isEditNoteMenuOpen } from "../../stores/EditNoteMenu";
  import { activeModal, closeModal } from "../../stores/modalStore";

  export let data;
  const { user } = data;
  const username = user.name;
</script>

<Pagetransitions>
  <div class="flex-container">
    {#if $activeModal === "createcategory"}
      <CreateCategorymodal on:close={closeModal} />
    {/if}
    <!--Show note creation modal when new note button is pressed-->
    {#if $activeModal === "createnote"}
      <Createnotemodal on:close={closeModal} />
    {/if}
    <!--Show note edit modal when edit note button is pressed-->
    {#if $isEditNoteMenuOpen}
      <Editnotemodal />
    {/if}
    <!--Show log out confirm modal when log out button is pressed-->
    {#if $activeModal === "logout"}
      <LogoutconfirmModal on:close={closeModal} />
    {/if}
    <div class="flex-items-left">
      <!--Pass username to sidebar component as prop-->
      <Sidebar userName={username} />
    </div>
    <div class="flex-items-right">
      <Searchbar />
      <Notes />
    </div>
  </div>
</Pagetransitions>

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
