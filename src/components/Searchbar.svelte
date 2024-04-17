<div class="searchbar">
    <input type="text" placeholder="Search For Note...">
</div>

<style lang="scss">
    .searchbar{
        position: absolute;
        background-color: $black;
        width: 80%;
        height: 4rem;
        margin-left: 23rem;
        margin-top: 1rem;
        border-radius: 12px;
    }
    input{
        background-color: $black;
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