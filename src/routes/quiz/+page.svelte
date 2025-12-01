<script lang="ts">
import { page } from "$app/state"
import Quiz1, { metadata as meta0 } from "./1.svx"
import Quiz2, { metadata as meta1 } from "./2.svx"

const id = Number(page.url.searchParams.get("id")) || null

const QUIZ = {
  1: { component: Quiz1, metadata: meta0 },
  2: { component: Quiz2, metadata: meta1 }
} as const
</script>

<div class="flex flex-col prose mx-auto">
  <h2>문제 제목</h2>
  <h3>문제 설명</h3>
  {#if id !== null && id in QUIZ}
      {@const quiz = QUIZ[id as keyof typeof QUIZ]}
      {@const QuizComponent = quiz.component}
      <svelte:component this={QuizComponent} />
    {:else}
      <p>알 수 없는 퀴즈입니다.</p>
    {/if}
</div>

{#if id !== null && id in QUIZ}
  {@const meta = QUIZ[id as keyof typeof QUIZ].metadata}
  <div class="flex flex-col gap-2 mt-4">
    <!-- Text -->
    {#if meta.answer_type === "text"}
      <input type="text" class="input" />
    <!-- Choice -->
    {:else if meta.answer_type === "choice"}
      {#each meta.answer_choices as choice, i}
        <div class="flex items-center gap-1">
          <input type="radio" class="radio" id={`choice-${i}`} name="answer" />
          <label for={`choice-${i}`}>{choice}</label>
        </div>
      {/each}
    {/if}
    <button class="btn btn-primary">Submit</button>
  </div>
{/if}
