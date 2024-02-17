<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100svh;
  margin: 0;
  padding: 0;
}
html {
  color-scheme: light;
}
html.dark {
  color-scheme: dark;
}
</style>
