<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  icon?: string
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
}>(), {
  color: 'neutral',
  variant: 'subtle'
})
</script>

<template>
  <UAlert
    :title="title"
    :description="description"
    :icon="icon"
    :color="color"
    :variant="variant"
    class="not-prose my-6"
  >
    <template
      v-if="$slots.default"
      #description
    >
      <slot />
    </template>
  </UAlert>
</template>
