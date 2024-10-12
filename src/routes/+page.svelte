<script>
  // Import Font
  import "@fontsource-variable/rubik";
  import { fade } from 'svelte/transition';
  import Icon from "@iconify/svelte";


  // Import Components
  import Sidebar from "../components/Sidebar.svelte";
  import Searchbar from "../components/Searchbar.svelte";
  import Notes from "../components/Notes.svelte";
  
  // const fetchData = async () => {
  //     try {
  //         const res = await fetch("http://localhost:3000/test", {
  //             method: "GET",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             }
  //         });
  //         const data = await res.json();
  //         console.log(data);
  //     }
  //     catch (error){
  //         console.error("Error fetching data", error);
  //     }
  // }
  // fetchData();

  let isOpen = false;

  // Function to open/close note creation menu
  function createNoteMenu() {
      isOpen = !isOpen;
  }
  
</script>

<div class="flex-container">
    {#if isOpen}
        <div class="createnote-container" transition:fade={{ delay: 250, duration: 300}}>
            <div class="createnote">
                <div class="top-section">
                    <h1 class="createnote-heading">Create new note</h1>
                    <button class="closemenu-btn" on:click={createNoteMenu}>
                        <Icon class="closemenu-icon" icon="basil:cross-outline"/>
                    </button>
                </div>
                <input>
            </div>
        </div>
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
    background-color: $bg-color;
    font-family: "Rubik Variable", sans-serif;
  }
  .createnote-container{
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease; /* Smooth transition for opacity */
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    backdrop-filter: blur(1px); /* Blurs the background */
  }
  .createnote{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 35rem;
    height: 45rem;
    background-color: $bg-color;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 4px 0px, rgba(0, 0, 0, 0.80) 0px 2px 16px 0px;
    color: $white;
  }
  .top-section{
    display: flex;
    flex-direction: row;
  }
  .createnote-heading{
    color: $white;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .closemenu-btn{
    height: 2rem;
    width: 4rem;
    margin-left: auto;
    margin-top: 1rem;
    background: transparent;
    border: none;
  }
  .closemenu-btn:hover{
    cursor: pointer;
  }
  :global(.closemenu-icon) {
    font-size: 2rem;
    color: $white;
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
