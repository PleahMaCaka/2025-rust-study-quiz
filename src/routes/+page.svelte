<script lang="ts">
import { goto } from "$app/navigation"

let quizNumber = $state(null)
</script>

<svelte:head>
  <title>Rust Study 2025 - Quiz</title>
</svelte:head>

<main class="size-full flex flex-col justify-center items-center gap-4">
  <h1 class="font-semibold text-2xl colab-gradient">
    Welcome To
    Coding Lab 2025 Rust Study Midterm
  </h1>
  <div class="flex items-center mb-4">
    <p class="mx-2 text-lg font-medium text-gray-700">Quiz #</p>
    <input
      type="text"
      class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      placeholder="Enter quiz number"
      bind:value={quizNumber}
    >
    <button
      onclick={() => quizNumber !== null ? goto(`quiz?id=${quizNumber}`) : null}
      class="btn btn-secondary btn-sm btn-circle ml-2"
    >
      ->
    </button>
  </div>

  <div class="flex flex-col">
    <h2>Examples</h2>
    <a class="colab-gradient" href="quiz?id=1">Quiz 1</a>
    <a class="colab-gradient" href="quiz?id=2">Quiz 2</a>
  </div>
</main>
