<script>
  //Import font
  import "@fontsource-variable/rubik";
  //Import icons
  import Icon from "@iconify/svelte";

  export let userName;
  export let logoutModal;
</script>

<div class="sidebar-container">
  <h2 class="navbar-heading">
    <Icon class="svelte-logo" icon="devicon:svelte" />velte Notes
  </h2>
  <div class="top-wrapper">
    <h4 class="categories-heading">Categories</h4>
    <a title="Add Category" id="add-categorybtn"
      ><Icon icon="tabler:plus" class="plus-icon" /></a
    >
  </div>
  <div class="categories-container">
    <ul>
      <li>Test category</li>
      <li>Business</li>
    </ul>
  </div>
  <div class="profile-wrapper">
    <!-- <Icon class="profile-icon" icon="gg:profile" /> -->
    <!-- <Icon class="profile-icon" icon="iconamoon:profile-circle-fill" /> -->
    <Icon class="profile-icon" icon="pajamas:profile" />
    <p title={userName} class="username">{userName}</p>
    <div title="Settings" class="settings-wrapper">
      <a href="/settings"
        ><Icon class="settings-icon" icon="material-symbols:settings" />
      </a>
    </div>
    <div title="Log out" class="logout-wrapper">
      <!-- <form class="logout-form" method="post">
          <button class="logout-btn" type="submit"><Icon class="logout-icon" icon="uil:signout" /></button>
         </form> -->
      <button on:click={logoutModal} class="logout-btn"
        ><Icon class="logout-icon" icon="uil:signout" /></button
      >
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
    font-family: "Rubik Variable", sans-serif;
  }
  .navbar-heading {
    margin: 2rem;
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
  .top-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding-top: 1rem;
  }
  .categories-heading {
    color: $white;
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
  .categories-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 2rem;
    ul{
      color: $light-gray;
      margin-left: 1.1rem;
    }
    li{
      list-style: none;
      margin-top: 1rem;
      cursor: pointer;
    }
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
    font-size: 2rem !important;
  }
  .username {
    margin-left: 0.5rem;
    font-size: 1.1rem;
    width: 10rem;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow: ellipsis;
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
  .logout-btn {
    background-color: transparent;
    outline: none;
    border: none;
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
