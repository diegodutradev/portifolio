<template>
  <div class="min-h-screen py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Meus Projetos
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Uma seleção de projetos que mostram minhas habilidades em desenvolvimento backend, automações e soluções full-stack
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <n-button
          v-for="category in categories"
          :key="category"
          :type="selectedCategory === category ? 'primary' : 'default'"
          :secondary="selectedCategory !== category"
          @click="selectedCategory = category"
          class="mb-2"
        >
          {{ category }}
        </n-button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <project-card
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @click="openProjectModal"
          class="animate-slide-up"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <Icon icon="heroicons:folder-open-20-solid" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No projects found
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          Try selecting a different category to see more projects.
        </p>
      </div>

      <!-- Load More Button (if you have more projects) -->
      <div class="text-center" v-if="filteredProjects.length >= 6">
        <!-- <n-button
          size="large"
          secondary
          @click="loadMore"
          :loading="loading"
        >
          Load More Projects
        </n-button> -->
      </div>
    </div>

    <!-- Project Modal -->
    <project-modal
      v-model:show="showModal"
      :project="selectedProject"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import ProjectCard from '../components/ui/ProjectCard.vue'
import ProjectModal from '../components/ui/ProjectModal.vue'
import { projects, categories, type Project } from '../data/projects'

const selectedCategory = ref('Todos')
const showModal = ref(false)
const selectedProject = ref<Project | null>(null)
const loading = ref(false)

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  showModal.value = true
}

const loadMore = () => {
  loading.value = true
  // Simulate loading more projects
  setTimeout(() => {
    loading.value = false
    // In a real app, you would fetch more projects here
  }, 1000)
}
</script>