<script>
  import Icon from "@iconify/svelte";
</script>

<div class="sidebar-container">
  <h2 class="navbar-heading">
    <Icon class="svelte-logo" icon="devicon:svelte" />velte Notes
  </h2>
  <div class="categories-container">
    <div class="top-wrapper">
      <h4 class="categories-heading">Categories</h4>
      <a id="add-categorybtn"><Icon icon="tabler:plus" class="plus-icon" /></a>
    </div>
    <div class="buttons-wrapper">
      <a href="https://example.org" class="settings-btn"><Icon class="bottom-icon" icon="material-symbols:settings" />Settings</a>
      <a href="https://example.org" class="source-btn"><Icon class="bottom-icon" icon="mdi:github" />Source</a>
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
    flex-direction: column;
    flex: 1;
    padding-top: 2rem;
  }
  .top-wrapper{
    display: flex;
    flex: 1;
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
    cursor: pointer;
    transition: 1s;
  }
  :global(.plus-icon):hover {
    rotate: 90deg;
  }
  #add-categorybtn {
    background-color: transparent;
    outline: none;
    border: none;
    width: min-content;
    margin-left: 9.5rem;
  }
  .buttons-wrapper{
    display: flex;
    flex-direction: row;
    padding-left: 1rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }
  .settings-btn{
    border: none;
    color: $white;
    text-decoration: none;
    transition: 0.5s;
  }
  .settings-btn:hover{
    color: $primary-color;
  }
  .source-btn{
    border: none;
    color: $white;
    text-decoration: none;
    transition: 0.5s;
  }
  .source-btn:hover{
    color: $primary-color;
  }
  :global(.bottom-icon) {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    vertical-align: top;
  }
</style>
