<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container>
    <v-card>
      <template v-slot:title> Jobs List </template>
      <template v-slot:text>
        <v-row>
          <v-col cols="6">
            <v-text-field label="State" v-model="stateSearch"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="Salary" v-model="salarySearch"></v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="jobsFiltered"
          :sort-by="[{ key: 'calories', order: 'asc' }]"
          class="elevation-1"
        >
          <template v-slot:item.salary="{ item }">
            {{ formatSalary(item.columns.salary) }}
          </template>
          <!--eslint-disable-next-line vue/valid-v-slot -->
          <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="openJob(item.raw.id)"> mdi-link </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary"> atualizar </v-btn>
          </template>
        </v-data-table>
      </template>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { getJobs, type Job } from '../services/jobs'
import { useRouter } from 'vue-router'
import { formatSalary } from '@/utils/formatters'

const jobs = ref<Job[]>([])
const stateSearch = ref<string>('')
const salarySearch = ref<number | null>(null)
const router = useRouter()

const jobsFiltered = computed((): Job[] => {
  return jobs.value.filter((job: Job): boolean => {
    if (stateSearch.value !== '' && !haveStringInPropValue(job.state, stateSearch.value)) {
      return false
    }
    if (
      salarySearch.value !== null &&
      !haveStringInPropValue(`${job.salary}`, `${salarySearch.value}`)
    ) {
      return false
    }
    return true
  })
})

/**
 * Check if the prop value have the search value
 *
 * @param propValue - value of the prop in string
 * @param searchValue - value of the search in string
 */
function haveStringInPropValue(propValue: string, searchValue: string): boolean {
  return propValue.includes(searchValue)
}

onMounted((): void => {
  /**
   * Get jobs from the API
   */
  getJobs().then((data: Job[]): void => {
    jobs.value = data
  })
})
const headers = [
  {
    title: 'Título',
    align: 'start',
    key: 'title'
  },
  { title: 'Descrição', key: 'description', sortable: false },
  { title: 'Estado', key: 'state' },
  { title: 'Salário', key: 'salary' },
  { title: 'Ações', key: 'actions', sortable: false }
]

/**
 * Redirect to the job page
 * @function openJob
 * @param id
 */
function openJob(id: number): void {
  router.push(`/job/${id}`)
}
</script>
