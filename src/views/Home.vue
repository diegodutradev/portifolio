<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-0 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div class="absolute top-0 right-0 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style="animation-delay: 4s;"></div>
      
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="text-center">
          <!-- Avatar -->
          <div class="mb-8">
            <div class="relative inline-block">
              <img
                src="https://github.com/diegodutradev.png"
                alt="Diego Dutra"
                class="w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-xl"
              />
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white dark:border-gray-700"></div>
            </div>
          </div>

          <!-- Name and Title -->
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Eu sou, <span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Diego Dutra</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-up">
            Desenvolvedor BackEnd
          </p>
          
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
            Desenvolvo APIs escaláveis, automatizo fluxos de trabalho complexos e crio soluções backend eficientes que impulsionam aplicações modernas.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.4s;">
            <n-button
              type="primary"
              size="large"
              @click="$router.push('/projects')"
              class="px-8 py-3"
            >
              <template #icon>
                <Icon icon="heroicons:eye-20-solid" class="w-5 h-5" />
              </template>
              Conheça meu trabalho
            </n-button>
            
            <n-button
              secondary
              size="large"
              @click="$router.push('/contact')"
              class="px-8 py-3"
            >
              <template #icon>
                <Icon icon="heroicons:chat-bubble-left-right-20-solid" class="w-5 h-5" />
              </template>
              Vamos conversar
            </n-button>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center space-x-6 mt-12 animate-slide-up" style="animation-delay: 0.6s;">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary-500 transition-colors duration-200 transform hover:scale-110"
            >
              <Icon :icon="social.icon" class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Technologies -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologias que utilizo
          </h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções escaláveis e eficientes
          </p>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6">
          <div
            v-for="(tech, index) in techStack"
            :key="tech.name"
            class="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <Icon
              :icon="tech.icon"
              class="w-12 h-12 mb-2"
              :style="{ color: tech.color }"
            />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { techStack } from '../data/skills'

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:john.doe@example.com' }
]

const stats = [
  { value: '30+', label: 'Projetos Concluídos' },
  { value: '2+', label: 'Anos de Experiência' },
  { value: '20+', label: 'Tecnologias' },
  { value: '100%', label: 'Satisfação do Cliente' }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>