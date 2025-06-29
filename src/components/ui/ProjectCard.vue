<template>
  <n-card 
    :bordered="false"
    class="project-card group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    @click="$emit('click', project)"
  >
    <!-- Project Image -->
    <div class="relative overflow-hidden rounded-lg mb-4">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <!-- Category badge -->
      <div class="absolute top-3 left-3">
        <span class="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
          {{ project.category }}
        </span>
      </div>
      
      <!-- Quick action buttons -->
      <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex space-x-2">
          <n-button
            v-if="project.githubUrl"
            circle
            secondary
            size="small"
            @click.stop="openLink(project.githubUrl)"
          >
            <template #icon>
              <Icon icon="mdi:github" class="w-4 h-4" />
            </template>
          </n-button>
          <n-button
            v-if="project.liveUrl"
            circle
            secondary
            size="small"
            @click.stop="openLink(project.liveUrl)"
          >
            <template #icon>
              <Icon icon="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4" />
            </template>
          </n-button>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div class="space-y-3">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
        {{ project.description }}
      </p>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 3"
          class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md"
        >
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
}

defineProps<Props>()

defineEmits<{
  click: [project: Project]
}>()

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  border-radius: 0.5rem;
}
.dark .project-card {
  background-color: #1f2937; /* gray-800 */
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
