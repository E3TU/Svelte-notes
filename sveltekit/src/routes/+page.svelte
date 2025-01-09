<script>
  // Import Font
  import "@fontsource-variable/rubik";
  
  // Import Components
  import Sidebar from "../components/Sidebar.svelte";
  import Searchbar from "../components/Searchbar.svelte";
  import Notes from "../components/Notes.svelte";
  import Createnote from "../components/Createnote.svelte";
  import Login from "../components/Login.svelte";
  import Register from "../components/Register.svelte";
  
  // Import Store(s)
  import {createNoteMenu, isMenuOpen} from "../stores/CreateNoteMenu.js";

</script>

<div class="flex-container">
    <Register />
   <!-- {#if $isMenuOpen}
       <Createnote />
   {/if}
   <div class="flex-items-left">
       <Sidebar />
   </div>
 <div class="flex-items-right">
   <Searchbar />
   <Notes createNoteMenu={createNoteMenu} />
  </div> -->
</div>

<style lang="scss">
  .flex-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: $bg-color;
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
