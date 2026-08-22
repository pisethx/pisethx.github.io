<script setup lang="ts">
defineProps<{
  items?: string[]
}>()
</script>

<template>
  <ul
    v-if="items?.length"
    class="list-disc space-y-1 ps-5 my-4"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
</template>
