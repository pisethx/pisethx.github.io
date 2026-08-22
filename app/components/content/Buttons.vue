<script setup lang="ts">
export interface ContentButton {
  label: string
  to?: string
  target?: string
  icon?: string
  color?: 'primary' | 'neutral' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link'
}

defineProps<{
  items?: ContentButton[]
}>()
</script>

<template>
  <div
    v-if="items?.length"
    class="not-prose my-6 flex flex-wrap gap-2"
  >
    <UButton
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :to="item.to"
      :target="item.target"
      :icon="item.icon"
      :color="item.color || 'primary'"
      :variant="item.variant || 'solid'"
    />
  </div>
</template>
