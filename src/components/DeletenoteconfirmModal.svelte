<script>
  import { deleteNoteMenu } from "../stores/DeleteNoteMenu";
</script>

<div class="deleteNoteconfirmModal">
  <div class="deleteNoteContainer">
    <div class="top-section">
      <h2 class="deletenote-heading">Delete Note</h2>
    </div>
    <div class="bottom-section">
      <p class="deletenote-text">Are you sure you want to delete the note?</p>
      <div class="button-container">
        <button id="confirm-button">Confirm</button>
        <button on:click|preventDefault={deleteNoteMenu} id="cancel-button"
          >Cancel</button
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .deleteNoteconfirmModal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    backdrop-filter: blur(1px); /* Blurs the background */
    font-family: "Rubik Variable", sans-serif;
  }
  .deleteNoteContainer {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 20rem;
    height: 15rem;
    background-color: $bg-color;
    border: 3px solid $red;
    border-radius: 12px;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.8) 0px 2px 16px 0px;
    color: $white;
    cursor: default !important;
  }
  .top-section {
    display: flex;
    flex-direction: row;
  }
  .deletenote-heading {
    color: $white;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .bottom-section {
    display: flex;
    flex-direction: column;
  }
  .deletenote-text{
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 4rem;
    justify-content: center;
    gap: 2rem;
  }
  #confirm-button {
    border: 2px solid $red;
    background-color: $red;
    color: $white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 100%;
    transition: 0.5s;
  }
  #confirm-button:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.5s;
  }
  #cancel-button {
    border: 2px solid $green;
    background-color: transparent;
    color: $white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 100%;
    transition: 0.5s;
  }
  #cancel-button:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 0.5s;
  }
</style>
