<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and description -->
        <div class="col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">DD</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">Diego Dutra</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Desenvolvedor Backend apaixonado por criar soluções escaláveis e ferramentas de automação.
          </p>
          <!-- Social links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary-500 transition-colors duration-200"
            >
              <Icon :icon="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Links Rápidos</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.to"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact info -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Entre em contato</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Icon icon="heroicons:envelope-20-solid" class="w-5 h-5 text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">diego.dutradev@gmail.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <Icon icon="heroicons:map-pin-20-solid" class="w-5 h-5 text-gray-400" />
              <span class="text-gray-600 dark:text-gray-400">Brasília, DF</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            © {{ currentYear }} Diego Dutra - Todos os Direitos Reservados.
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
            Desenvolvido com Vue.js e Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/diegodutradev' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/diego-dutra-9b7b07233/' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: 'https://wa.me/61983362270' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:diego.dutradev@gmail.com' }
]

const quickLinks = [
  { name: 'Início', to: '/' },
  { name: 'Sobre Mim', to: '/about' },
  { name: 'Projetos', to: '/projects' },
  { name: 'Contato', to: '/contact' }
]
</script>