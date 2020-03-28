<script>
  import { count } from "./store.js";

  function increment() {
    count.update(n => n + 1);
  }
</script>

<style>
  h1 {
    font-family: monospace;
  }
</style>

<h1 on:click={increment}>The count is {$count}</h1>
