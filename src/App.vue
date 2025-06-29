<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <router-view />
        </main>
        <Footer />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui'
import { useDark } from '@vueuse/core'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

const isDark = useDark()

const theme = computed(() => (isDark.value ? darkTheme : null))

const themeOverrides = {
  common: {
    primaryColor: '#0ea5e9',
    primaryColorHover: '#0284c7',
    primaryColorPressed: '#0369a1',
    primaryColorSuppl: '#38bdf8',
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.dark {
  color-scheme: dark;
}
</style>