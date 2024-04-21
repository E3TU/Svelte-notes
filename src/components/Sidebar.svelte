<script>
  import Icon from "@iconify/svelte";
</script>

<div class="sidebar-container">
  <h2 class="navbar-heading">
    <Icon class="svelte-logo" icon="devicon:svelte" />velte Notes
  </h2>
  <div class="categories-container">
    <div class="wrapper">
      <h4 class="categories-heading">Categories</h4>
      <a id="add-categorybtn"><Icon icon="tabler:plus" class="plus-icon" /></a>
    </div>
  </div>
</div>

<style lang="scss">
  .sidebar-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 20rem;
    background-color: $gray;
    margin: 1rem;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    letter-spacing: 0.05rem;
  }
  .navbar-heading {
    // margin: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    color: $white;
    font-size: 1.5rem;
  }
  :global(.svelte-logo) {
    vertical-align: bottom;
    font-size: 2rem;
  }
  .categories-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding-top: 2rem;
  }
  .wrapper{
    display: flex;
    width: 100%;
    height: 2rem;
  }
  .categories-heading {
    color: $white;
    // margin-top: 2rem;
    margin-left: 1rem;
  }
  :global(.plus-icon) {
    color: $primary-color;
    font-size: 1.5rem;
    vertical-align: middle;
  }
  #add-categorybtn {
    background-color: transparent;
    outline: none;
    border: none;
    width: min-content;
    margin-left: 8rem;
  }
</style>
