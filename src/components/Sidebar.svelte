<div class="sidebar-container">
    <h2 class="navbar-heading">Svelte Notes</h2>
    <button id="newnote-btn">New Note</button>
</div>

<style lang="scss">
    .sidebar-container{
        height: 100vh;
        width: 20rem;
        background-color: $black;
        margin: 1rem;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .navbar-heading{
        margin: 1rem;
        color: $white;
        letter-spacing: 0.05rem;
    }
    #newnote-btn{
        margin: 1rem;
        background-color: $primary-color;
        border: none;
        border-radius: 8px;
        color: $white;
        padding: 1rem 7rem;
        font-size: 0.9rem;
    }
</style>