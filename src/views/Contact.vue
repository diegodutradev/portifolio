<template>
  <div class="min-h-screen py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Page Header -->
      <div class="text-center mb-16 animate-slide-up">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Entre em Contato
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
         Tem um projeto em mente? Vamos conversar sobre como podemos trabalhar juntos para transformar suas ideias em realidade.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-up delay-200">
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="animate-slide-up delay-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Sua Ideia, Meu Código, Nosso Projeto
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Sempre em busca de novos desafios e oportunidades. Seja para integrar sua equipe ou colaborar em um projeto, vamos conversar e explorar as possibilidades.
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-6">
            <div
              v-for="(contact, index) in contactInfo"
              :key="contact.type"
              :class="`flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 animate-slide-up delay-${(index + 4) * 100}`"
            >
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Icon :icon="contact.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                  {{ contact.type }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ contact.value }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-500">
                  {{ contact.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="animate-slide-up delay-600">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
              Social
            </h3>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              >
                <Icon :icon="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl animate-slide-up delay-500">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Envie Uma Mensagem
          </h2>
          
          <n-form
            ref="formRef"
            :model="formData"
            :rules="formRules"
            size="large"
            :show-label="false"
          >
            <div class="space-y-6">
              <n-form-item path="name">
                <n-input
                  v-model:value="formData.name"
                  placeholder="Nome"
                  size="large"
                  :input-props="{ autocomplete: 'name' }"
                />
              </n-form-item>

              <n-form-item path="email">
                <n-input
                  v-model:value="formData.email"
                  placeholder="Email"
                  size="large"
                  :input-props="{ autocomplete: 'email', type: 'email' }"
                />
              </n-form-item>

              <n-form-item path="subject">
                <n-input
                  v-model:value="formData.subject"
                  placeholder="Assunto"
                  size="large"
                />
              </n-form-item>

              <n-form-item path="message">
                <n-input
                  v-model:value="formData.message"
                  type="textarea"
                  placeholder="Digite Aqui Sua Mensagem"
                  :rows="6"
                  size="large"
                />
              </n-form-item>

              <n-button
                type="primary"
                size="large"
                :loading="submitting"
                @click="submitForm"
                class="w-full"
              >
                <template #icon>
                  <Icon icon="heroicons:paper-airplane-20-solid" class="w-5 h-5" />
                </template>
                Enviar Mensagem
              </n-button>
            </div>
          </n-form>

          <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
            Retorno o contato em menos de 24 horas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui'
import { Icon } from '@iconify/vue'

const message = useMessage()
const formRef = ref()
const submitting = ref(false)

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formRules = {
  name: {
    required: true,
    message: 'Por favor digite um nome válido',
    trigger: 'blur'
  },
  email: {
    required: true,
    message: 'Por favor digite um email válido',
    trigger: 'blur'
  },
  subject: {
    required: true,
    message: 'Por favor digite o assunto da mensagem',
    trigger: 'blur'
  },
  message: {
    required: true,
    message: 'Por favor digite sua mensagem',
    trigger: 'blur'
  }
}

const contactInfo = [
  {
    type: 'Email',
    value: 'diego.dutradev@gmail.com',
    description: 'Me envie um email a qualquer momento',
    icon: 'heroicons:envelope-20-solid'
  },
  {
    type: 'Location',
    value: 'Brasília, DF',
    description: 'Disponível para trabalho remoto ou presencial',
    icon: 'heroicons:map-pin-20-solid'
  },
  {
    type: 'Tempo de resposta',
    value: '24 Horas Em Média',
    description: 'Respondo a todas as solicitações com agilidade',
    icon: 'heroicons:clock-20-solid'
  }
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/diegodutradev' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/diego-dutra-9b7b07233/' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: 'https://wa.me/61983362270' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:diego.dutradev@gmail.com' }
]

const submitForm = async () => {
  try {
    await formRef.value?.validate()
    submitting.value = true
    
    setTimeout(() => {
      submitting.value = false
      message.success('Mensagem enviada com sucesso! Retornarei em breve.')
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }, 2000)
    
  } catch (error) {
    message.error('Por favor, preencha todos os campos obrigatórios.')
  }
}
</script>
