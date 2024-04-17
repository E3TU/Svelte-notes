<script>
    // Import Font
    import '@fontsource-variable/rubik';

    // Import Components
    import Sidebar from "../components/Sidebar.svelte";
    import Searchbar from '../components/Searchbar.svelte';
</script>

<div class="flex-container">
    <Searchbar/>
    <Sidebar/>
</div>

<style lang="scss">
    .flex-container{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: $bg-color;
        font-family: 'Rubik Variable', sans-serif;
    }
</style>