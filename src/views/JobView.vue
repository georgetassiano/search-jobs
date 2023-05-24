<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title>
        {{ job?.title }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <p>Description: {{ job?.description }}</p>
          </v-col>
        </v-row>
        <v-divider class="my-4" />
        <v-row align="center" justify="space-between">
          <v-col cols="4">
            <v-chip>
              {{ job?.state }}
            </v-chip>
          </v-col>
          <v-col cols="4">
            <v-chip>
              {{ formatSalary(job?.salary) }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="goToHome"> Voltar </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { getJob, type Job } from '@/services/jobs'
import { formatSalary } from '@/utils/formatters'
import { useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/alert'

const props = defineProps<{
  id: string
}>()

const job = ref<Job>()
const router = useRouter()
const alertStore = useAlertStore()

onMounted((): void => {
  /**
   * Get job from the API
   */
  getJob(Number(props.id))
    .then((data: Job): void => {
      job.value = data
    })
    .catch((error: Error): void => {
      alertStore.showAlert('Error', error.message)
    })
})

/**
 * Go to home page
 */
function goToHome(): void {
  router.push('/')
}
</script>
