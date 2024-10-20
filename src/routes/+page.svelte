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
  function createNoteMenu(e) {
      e.stopPropagation();
      isOpen = !isOpen;
  }
  
</script>

<div class="flex-container">
    {#if isOpen}
        <div class="createnote-container" transition:fade={{ delay: 250, duration: 300}}>
            <div class="createnote">
                <div class="top-section">
                    <h1 class="createnote-heading">Create new note</h1>
                    <button class="closemenu-btn" on:click|preventDefault={createNoteMenu}>
                        <Icon class="closemenu-icon" icon="basil:cross-outline"/>
                    </button>
                </div>
                <div class="bottom-section">
                    <div class="note-title-wrapper">
                        <label for="note-title">Note Title</label>
                        <input id="note-title" placeholder="Enter note title">
                    </div>
                    <div class="note-content-wrapper">
                        <label for="note-content">Note Content</label>
                        <textarea id="note-content" placeholder="Write your note here..." rows="10"></textarea>
                    </div>
                    <button id="save-note-btn">Save Note</button>
                </div>
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
    z-index: 1000;
  }
  .createnote-container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(1px); /* Blurs the background */
  }
  .createnote{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 30rem;
    height: 40rem;
    background-color: $bg-color;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 4px 0px, rgba(0, 0, 0, 0.80) 0px 2px 16px 0px;
    color: $white;
    cursor: default !important;
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
    width: 2rem;
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
  .bottom-section{
    display: flex;
    flex-direction: column;
  }
  .note-title-wrapper{
    display: flex;
    flex-direction: column;
  }
  .note-content-wrapper{
    display: flex;
    flex-direction: column;
  }
  label{
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.25rem;
  }
  #note-title{
    padding: 1rem;
    margin: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    outline: none;
    border: 2px solid $white;
    background-color: transparent;
    color: $white;
    transition: 0.5s;
  }
  #note-title:focus{
    border: 2px solid $primary-color;
  }
  #note-title::placeholder{
    color: $white;
    opacity: 0.7;
  }
  #note-content{
    resize: none;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid $white;
    background-color: transparent;
    outline: none;
    color: $white;
    transition: 0.5s;
    font-family: 'Rubik Variable', sans-serif;
  }
  #note-content:focus{
    border: 2px solid $primary-color;
  }
  #note-content::-webkit-scrollbar{
    width: 10px;
  }
  #note-content::-webkit-scrollbar-track{
    background-color: $gray;
    border-radius: 8px;
  }
  #note-content::-webkit-scrollbar-thumb{
    background-color: $primary-color;
    border-radius: 10px;
    height: 30px;
  }
  #note-content::placeholder{
    color: $white;
    opacity: 0.7;
  }
  #save-note-btn{
    position: relative;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.25rem;
    border-radius: 8px;
    outline: none;
    border: 2px solid $primary-color;
    background-color: $primary-color;
    color: $white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    z-index: 0;
    transition: 0.5s;
    cursor: pointer;
  }
  #save-note-btn::before{
    position: absolute;
    content: "";
    background: $primary-color;
    transition-duration: 0.5s;
    z-index: -1;
    inset: 0px 0px auto auto;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  #save-note-btn:hover::before{
    width: 0px;
    height: 100%;
    opacity: 1;
  }
  #save-note-btn:hover{
    background-color: transparent;
    transition: 0.5s;
    color: $primary-color;
  }
  #save-note-btn:active{
    top: 2px;
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
