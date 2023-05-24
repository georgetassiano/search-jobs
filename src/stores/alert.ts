import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const show = ref<boolean>(false)
  const title = ref<string>('')
  const text = ref<string>('')
  function showAlert(titleAlert: string, textAlert: string): void {
    show.value = true
    title.value = titleAlert
    text.value = textAlert
  }

  function closeAlert(): void {
    show.value = false
    title.value = ''
    text.value = ''
  }

  return { show, title, text, showAlert, closeAlert }
})
