<script>
    import Icon from '@iconify/svelte';
</script>

<div class="searchbar">
    <input type="text" placeholder="Search For Note...">
    <button id="search-btn"><Icon icon="grommet-icons:search" color="#fff" /></button>
</div>

<style lang="scss">
    .searchbar{
        background-color: transparent;
        display: flex;
        flex-direction: row;
        width: 98%;
        height: 4rem;
        margin: 1rem;
        border-radius: 12px;
    }
    input{
        background-color: $gray;
        border: none;
        border-radius: 12px;
        width: 100%;
        height: 100%;
        color: $white;
        padding: 1rem;
        font-size: 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    input:focus{
        outline: 2px solid $primary-color;
    }
    ::placeholder{
        color: $white;
        opacity: 0.8;
    }
    #search-btn{
        font-size: 1rem;
        margin-left: 2rem;
        padding: 1rem 1.5rem 1rem 1.5rem;
        border-radius: 12px;
        border: none;
        background-color: $primary-color;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: 0.5s;
    }
    #search-btn:hover{
        opacity: 0.8;
        transition: 0.5s;
        cursor: pointer;
    }
</style>