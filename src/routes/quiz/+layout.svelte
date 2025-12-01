<script lang="ts">
let { children } = $props()
</script>

<div class="flex flex-col py-12">
  <div class="mx-auto">
    <h1 class="text-3xl font-semibold py-4 flex items-end colab-gradient">
      <img
        src="/favicon.svg"
        alt="Coding Lab Logo"
        class="inline-block mr-4 size-14"
      />
      Coding Lab 2025 Rust Study Midterm
    </h1>
    <hr class="py-4"/>
    {@render children()}
  </div>
</div>
