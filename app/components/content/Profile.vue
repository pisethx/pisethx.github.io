<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  description?: string
  src?: string
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  orientation?: 'horizontal' | 'vertical'
}>(), {
  name: 'Monespiseth Ly',
  description: 'Senior Full Stack Developer',
  src: '/profile.png',
  size: '3xl',
  orientation: 'horizontal'
})
</script>

<template>
  <UUser
    :name="name"
    :description="description"
    :size="size"
    :orientation="orientation"
    :avatar="{
      src,
      alt: name
    }"
    class="not-prose mb-8"
    :ui="{
      name: 'text-highlighted',
      description: 'text-muted'
    }"
  />
</template>
