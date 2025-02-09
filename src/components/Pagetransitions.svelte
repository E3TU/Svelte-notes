<script>
  import { fade } from "svelte/transition";
</script>

<div
    transition:fade={{ delay: 150, duration: 300 }}
>
  <slot />
</div>
