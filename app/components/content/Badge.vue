<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  color: 'primary',
  variant: 'subtle',
  size: 'md'
})
</script>

<template>
  <UBadge
    :color="color"
    :variant="variant"
    :size="size"
    class="not-prose mb-6 inline-flex"
  >
    <slot />
  </UBadge>
</template>
