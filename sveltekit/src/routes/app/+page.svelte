<script>
    // Import components
    import Notes from "../../components/Notes.svelte";
    import Searchbar from "../../components/Searchbar.svelte";
    import Sidebar from "../../components/Sidebar.svelte";
    import Createnote from "../../components/Createnote.svelte";

    // Import Store(s)
    import {createNoteMenu, isMenuOpen} from "../../stores/CreateNoteMenu";
</script>


<div class="flex-container">
    {#if $isMenuOpen}
       <Createnote />
   {/if}
   <div class="flex-items-left">
       <Sidebar />
   </div>
 <div class="flex-items-right">
   <Searchbar />
   <Notes createNoteMenu={createNoteMenu} />
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
    .flex-items-left{
      display: flex;
      flex-direction: column;
    }
    .flex-items-right{
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  </style>