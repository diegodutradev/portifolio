<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">DD</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">Diego Dutra</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="nav-link"
              :class="{ 'nav-link-active': $route.name === item.name }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Right side buttons -->
        <div class="flex items-center space-x-4">
          <!-- Dark mode toggle -->
          <n-button
            quaternary
            circle
            @n-click="toggleDarkMode"
            class="text-gray-600 dark:text-gray-300"
          >
            <template #icon>
              <Icon 
                :icon="isDark ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid'"
                class="w-5 h-5"
              />
            </template>
          </n-button>

          <!-- Mobile menu button -->
          <n-button
            quaternary
            circle
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-gray-600 dark:text-gray-300"
          >
            <template #icon>
              <Icon 
                :icon="mobileMenuOpen ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
                class="w-5 h-5"
              />
            </template>
          </n-button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === item.name }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  storageKey: 'vueuse-color-scheme', // nome opcional, pode mudar
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDarkMode = useToggle(isDark)

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Início', to: '/' },
  { name: 'Sobre Mim', to: '/about' },
  { name: 'Projetos', to: '/projects' },
  { name: 'Contato', to: '/contact' },
]
</script>

<style scoped>
/* (Mantém seus estilos existentes sem alteração) */
.nav-link {
  color: #4b5563;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 200ms;
}
.nav-link:hover {
  color: #0ea5e9;
}
.dark .nav-link {
  color: #d1d5db;
}
.dark .nav-link:hover {
  color: #38bdf8;
}
.nav-link-active {
  color: #0ea5e9;
  background-color: #eff6ff;
}
.dark .nav-link-active {
  color: #38bdf8;
  background-color: rgba(2, 132, 199, 0.2);
}
.mobile-nav-link {
  display: block;
  color: #4b5563;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 200ms;
}
.mobile-nav-link:hover {
  color: #0ea5e9;
}
.dark .mobile-nav-link {
  color: #d1d5db;
}
.dark .mobile-nav-link:hover {
  color: #38bdf8;
}
.mobile-nav-link-active {
  color: #0ea5e9;
  background-color: #eff6ff;
}
.dark .mobile-nav-link-active {
  color: #38bdf8;
  background-color: rgba(2, 132, 199, 0.2);
}
</style>
