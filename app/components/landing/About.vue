<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import { getExperienceYears } from '~/utils/experience'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const { global } = useAppConfig()

const description = computed(() =>
  props.page.about.description.replace(
    '{years}',
    String(getExperienceYears(global.experienceStartYear))
  )
)
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>

<style scoped>

</style>
