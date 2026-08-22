<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  icon?: string
  to?: string
  target?: string
  variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'naked'
  highlight?: boolean
}>(), {
  variant: 'subtle'
})
</script>

<template>
  <UPageCard
    :title="title"
    :description="description"
    :icon="icon"
    :to="to"
    :target="target"
    :variant="variant"
    :highlight="highlight"
    class="not-prose my-6"
  >
    <slot />
  </UPageCard>
</template>
