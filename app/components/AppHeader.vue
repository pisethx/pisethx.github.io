<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <!--
    iPad/iOS Safari: sticky + backdrop-blur breaks hit-testing so header
    controls stop receiving taps. Use an opaque header layer and slideover menu.
  -->
  <UHeader
    mode="slideover"
    :to="header?.to || '/'"
    :ui="{
      root: 'bg-default border-b border-default h-(--ui-header-height) sticky top-0 z-50 isolate pointer-events-auto transform-gpu',
      center: 'flex-1',
      right: 'relative z-10 pointer-events-auto'
    }"
  >
    <UContentSearchButton
      v-if="header?.search"
      :collapsed="false"
      class="w-full"
    />

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0 rounded pointer-events-none"
      />

      <span
        v-if="header?.title"
        class="truncate font-semibold text-highlighted"
      >
        {{ header.title }}
      </span>
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden touch-manipulation"
      />

      <UColorModeButton
        v-if="header?.colorMode"
        class="touch-manipulation"
      />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          class="touch-manipulation"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
