<template>
  <div class="min-h-screen py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="text-center mb-16 animate-slide-up">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Sobre Mim
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Confira mais sobre minha jornada, habilidades e sobre minha trajetória
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-fade-in">
        
        <!-- Personal Info -->
        <div class="space-y-6 relative">
          <!-- Skeleton Loader -->
          <div
            v-if="!imageLoaded"
            class="w-full max-w-md mx-auto lg:mx-0 rounded-2xl h-[420px] bg-gray-200 dark:bg-gray-700 animate-pulse"
          ></div>

          <!-- Image -->
          <img
            v-show="imageLoaded"
            src="https://github.com/diegodutradev.png"
            alt="Diego Dutra"
            class="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-xl transition-opacity duration-500"
            @load="onImageLoad"
          />

          <!-- Icon -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Icon icon="heroicons:code-bracket-20-solid" class="w-12 h-12 text-white" />
          </div>
        </div>

        <!-- About Text -->
        <div class="space-y-6 animate-slide-up">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Olá! Eu sou o Diego Dutra
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Sou um Desenvolvedor Backend apaixonado, com mais de 2 anos de experiência criando aplicações web escaláveis e soluções de automação...
              </p>
              <p>
                Gosto de trabalhar com tecnologias modernas como Python, Django, FastAPI, Selenium e bancos de dados PostgreSQL/MySQL para criar soluções eficientes...
              </p>
              <p>
                Quando não estou programando, costumo explorar novas tecnologias, criar projetos para portfólio ou compartilhar conhecimento...
              </p>
            </div>
          </div>

          <!-- Key Stats -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div class="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg hover:scale-105 transition-transform">
              <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">30+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
            </div>
            <div class="bg-accent-50 dark:bg-accent-900/20 p-4 rounded-lg hover:scale-105 transition-transform">
              <div class="text-2xl font-bold text-accent-600 dark:text-accent-400">2+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Habilidades e Experiência
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-3">
                <Icon :icon="skill.icon" class="w-8 h-8" />
                <span class="font-semibold text-gray-900 dark:text-white">{{ skill.name }}</span>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="mb-16 animate-fade-in">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Experiências Profissionais
        </h2>
        <div class="relative">
          <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
          <div class="space-y-8">
            <div
              v-for="(item, index) in experience"
              :key="index"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'">
                <n-card class="bg-white dark:bg-gray-800 shadow-lg hover:ring-2 hover:ring-primary-500 transition">
                  <div class="space-y-2">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
                    <p class="text-primary-600 dark:text-primary-400 font-medium">{{ item.company }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.period }}</p>
                    <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                  </div>
                </n-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white animate-slide-up">
        <h2 class="text-2xl font-bold mb-4">Pronto para criar algo incrível?</h2>
        <p class="mb-6 opacity-90">
          Estou sempre em busca de novos desafios e projetos que façam a diferença.
        </p>
        <n-button
          size="large"
          secondary
          @click="$router.push('/contact')"
          class="bg-white text-primary-600 hover:bg-gray-100"
        >
          <template #icon>
            <Icon icon="heroicons:chat-bubble-left-right-20-solid" class="w-5 h-5" />
          </template>
          Entre em contato!
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { skills } from '../data/skills'

const imageLoaded = ref(false)
const onImageLoad = () => {
  imageLoaded.value = true
}

const experience = [
  {
    title: 'Desenvolvedor Junior',
    company: 'Microtécnica',
    period: '2023 - 2024',
    description: 'Desenvolvimento de API’s e automações utilizando Python...'
  },
  {
    title: 'Desenvolvedor Junior',
    company: 'Tecnobile',
    period: '2022 - 2023',
    description: 'Desenvolvimento de APIs Rest e soluções FullStack sob demanda...'
  }
]
</script>
