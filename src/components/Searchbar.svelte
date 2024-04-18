<div class="searchbar">
    <input type="text" placeholder="Search For Note...">
</div>

<style lang="scss">
    .searchbar{
        width: auto;
        height: 4rem;
        margin: 1rem;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    }
    ::placeholder{
        color: $white;
        opacity: 0.8;
    }
</style>