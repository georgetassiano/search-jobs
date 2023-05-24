<template>
  <v-alert
    v-model="alertStore.show"
    type="error"
    max-width="300"
    max-height="100"
    position="fixed"
    closable
    :title="alertStore.title"
    :text="alertStore.text"
    @click:close="alertStore.closeAlert()"
  />
</template>
<script setup lang="ts">
import { useAlertStore } from '@/stores/alert'
const alertStore = useAlertStore()
</script>
