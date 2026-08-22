<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc, seo } = useAppConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const path = computed(() => route.path === '/' ? '/' : route.path.replace(/\/$/, '') || '/')

const { data: page } = await useAsyncData(
  () => `docs-${path.value}`,
  () => queryCollection('docs').path(path.value).first(),
  { watch: [path] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(
  () => `surround-${path.value}`,
  () => queryCollectionItemSurroundings('docs', path.value, {
    fields: ['description']
  }),
  { watch: [path] }
)

const title = computed(() => page.value?.seo?.title || page.value?.title)
const description = computed(() => page.value?.seo?.description || page.value?.description)

useSeoMeta({
  title,
  ogTitle: () => `${title.value} - ${seo?.siteName}`,
  description,
  ogDescription: description
})

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path))
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description || undefined"
      :headline="headline || undefined"
    >
      <template
        v-if="page.badge"
        #links
      >
        <UBadge
          :label="page.badge"
          variant="subtle"
          color="primary"
        />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
      />
    </template>
  </UPage>
</template>
