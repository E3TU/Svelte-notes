<script>
  // Import Font
  import "@fontsource-variable/rubik";

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

  function createNoteMenu() {
      isOpen = !isOpen;
  }
  
</script>

<div class="flex-container">
    {#if isOpen}
        <div class="createnote-container">
            <div class="createnote">
                <h1>TEst</h1>
                <button on:click={createNoteMenu}>Tes</button>
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
  .createnote{
    width: 20rem;
    height: 20rem;
    background-color: $white;
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
