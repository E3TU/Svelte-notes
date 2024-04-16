<div class="sidebar-container">
    <h2 class="navbar-heading">Svelte Notes</h2>
    <button id="newnote-btn">New Note</button>
</div>

<style lang="scss">
    .sidebar-container{
        height: 100vh;
        width: 20rem;
        background-color: $primary-color;
        margin: 1rem;
        border-radius: 12px;
    }
    .navbar-heading{
        margin: 1rem;
        color: $white;
        letter-spacing: 0.1rem;
    }
    #newnote-btn{
        margin: 1rem;
        background-color: $black;
        border: none;
        color: $white;
    }
</style>