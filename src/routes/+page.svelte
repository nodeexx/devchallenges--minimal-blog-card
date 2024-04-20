<script>
import { Button } from '$lib/browser/shadcn-svelte/components/ui/button';
</script>

<h1>Welcome to SvelteKit</h1>
<p class="text-challenge-purple">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Button>Click me</Button>
<img src="/images/cactus_img.jpg" alt="Cactus" />

<style lang="postcss">
h1 {
  color: blue;

  &:hover {
    color: red;
  }
}
</style>
