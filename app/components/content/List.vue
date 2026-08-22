<script setup lang="ts">
withDefaults(defineProps<{
  items?: string[]
  /**
   * `list` — classic bullets
   * `badges` — wrapped Nuxt UI badges (great for tech stacks)
   */
  variant?: 'list' | 'badges'
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  badgeVariant?: 'solid' | 'outline' | 'soft' | 'subtle'
}>(), {
  variant: 'list',
  color: 'neutral',
  badgeVariant: 'subtle'
})
</script>

<template>
  <div
    v-if="items?.length && variant === 'badges'"
    class="not-prose my-4 flex flex-wrap gap-2"
  >
    <UBadge
      v-for="(item, index) in items"
      :key="index"
      :label="item"
      :color="color"
      :variant="badgeVariant"
      size="md"
    />
  </div>

  <ul
    v-else-if="items?.length"
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
