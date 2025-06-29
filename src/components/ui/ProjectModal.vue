<template>
  <n-modal
    :show="show"
    @update:show="$emit('update:show', $event)"
    :mask-closable="true"
    preset="card"
    :style="{ width: '90vw', maxWidth: '800px' }"
    :title="project?.title"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <template v-if="project">
      <!-- Project Image -->
      <div class="mb-6">
        <n-image
          :src="project.image"
          :alt="project.title"
          class="w-full rounded-lg"
          preview-disabled
        />
      </div>

      <!-- Project Details -->
      <div class="space-y-6">
        <!-- Category and Technologies -->
        <div class="flex flex-wrap items-center gap-3">
          <n-tag type="primary" :bordered="false">
            {{ project.category }}
          </n-tag>
          <div class="flex flex-wrap gap-2">
            <n-tag
              v-for="tech in project.technologies"
              :key="tech"
              size="small"
              :bordered="false"
              type="info"
            >
              {{ tech }}
            </n-tag>
          </div>
        </div>

        <!-- Description -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Description
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 pt-4">
          <n-button
            v-if="project.githubUrl"
            type="primary"
            size="medium"
            @click="openLink(project.githubUrl)"
          >
            <template #icon>
              <Icon icon="mdi:github" class="w-5 h-5" />
            </template>
            View Code
          </n-button>
          
          <n-button
            v-if="project.liveUrl"
            type="success"
            size="medium"
            @click="openLink(project.liveUrl)"
          >
            <template #icon>
              <Icon icon="heroicons:arrow-top-right-on-square-20-solid" class="w-5 h-5" />
            </template>
            Live Demo
          </n-button>
        </div>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NImage, NTag, NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import type { Project } from '../../data/projects'

interface Props {
  show: boolean
  project: Project | null
}

defineProps<Props>()

defineEmits<{
  'update:show': [value: boolean]
}>()

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>