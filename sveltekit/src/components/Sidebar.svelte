<script>
  //Import font
  import "@fontsource-variable/rubik";
  //Import icons
  import Icon from "@iconify/svelte";
</script>

<div class="sidebar-container">
  <h2 class="navbar-heading">
    <Icon class="svelte-logo" icon="devicon:svelte" />velte Notes
  </h2>
  <div class="categories-container">
    <div class="top-wrapper">
      <h4 class="categories-heading">Categories</h4>
      <a title="Add Category" id="add-categorybtn"
        ><Icon icon="tabler:plus" class="plus-icon" /></a
      >
    </div>
    <div class="profile-wrapper">
      <!-- <Icon class="profile-icon" icon="gg:profile" /> -->
      <!-- <Icon class="profile-icon" icon="iconamoon:profile-circle-fill" /> -->
      <Icon class="profile-icon" icon="pajamas:profile" />
      <p title="Username" class="username">Joe Mama</p>
      <div title="Settings" class="settings-wrapper">
        <Icon class="settings-icon" icon="material-symbols:settings" />
      </div>
      <div title="Log out" class="logout-wrapper">
        <Icon class="logout-icon" icon="uil:signout" />
      </div>
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
    font-family: 'Rubik Variable', sans-serif;
  }
  .navbar-heading {
    // margin: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    color: $white;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
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
  .top-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
    height: 2rem;
  }
  .categories-heading {
    color: $white;
    // margin-top: 2rem;
    margin-left: 1rem;
    letter-spacing: 0.05rem;
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
  .profile-wrapper {
    display: flex;
    align-items: center;
    // margin: 1rem;
    // background-color: $primary-color;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.8) 0px 2px 16px 0px;
    height: 4rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: $white;
  }
  :global(.profile-icon) {
    margin-left: 0.5rem;
    color: $white;
    font-size: 2rem;
  }
  .username {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }
  .settings-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-end;
  }
  :global(.settings-icon) {
    color: $white;
    vertical-align: bottom;
    margin-right: 1rem;
    font-size: 1.25rem;
    transition: 1s;
  }
  :global(.settings-icon):hover {
    rotate: 180deg;
    cursor: pointer;
  }
  :global(.logout-icon) {
    color: $white;
    vertical-align: bottom;
    margin-right: 1rem;
    font-size: 1.25rem;
    transition: 1s;
  }
  :global(.logout-icon):hover {
    color: $red;
    cursor: pointer;
  }
</style>
