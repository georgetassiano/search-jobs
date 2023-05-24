<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterPage from '@/components/FooterPage.vue'
import AlertError from './components/AlertError.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-layout class="justify-center">
        <RouterView />
        <alert-error />
      </v-layout>
    </v-main>
    <footer-page />
  </v-app>
</template>
