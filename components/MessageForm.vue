<template>
  <v-form @submit.prevent="sendMessage">
    <v-text-field
      label="Cообщение"
      outlined
      class="rounded-xl"
      v-model="message.text"
      :append-outer-icon="'mdi-send'"
      @click:append-outer="sendMessage"
    />
  </v-form>
</template>

<script>
export default {
  data: () => ({
    message: {
      user: '',
      time: '',
      text: '',
    },
  }),
  methods: {
    sendMessage() {
      if (this.message.text.trim()) {
        this.message.time = new Intl.DateTimeFormat('ru-RU', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }).format(new Date())
        this.message.user = this.$cookies.get('user')
        this.$store.dispatch('addMessage', this.message)
        this.message.text = this.message.time = ''
      }
    },
  },
}
</script>
