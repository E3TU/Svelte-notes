<script>
  import { fade } from "svelte/transition";
</script>

<div
    transition:fade={{ delay: 250, duration: 300 }}
>
  <slot />
</div>
