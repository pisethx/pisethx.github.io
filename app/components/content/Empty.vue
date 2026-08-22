<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  icon?: string
  variant?: 'outline' | 'solid' | 'soft' | 'subtle' | 'naked'
}>(), {
  title: 'Coming soon',
  description: 'More details will be published here soon.',
  icon: 'i-lucide-hourglass',
  variant: 'subtle'
})
</script>

<template>
  <UEmpty
    :title="title"
    :description="description"
    :icon="icon"
    :variant="variant"
    class="not-prose my-6"
  />
</template>
