<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 class="pa-4">
      <v-card width="500" class="rounded-xl">
        <v-snackbar
          v-model="snackbar"
          color="error"
          :timeout="3000"
          top
          content-class="text-center"
        >
          {{ snackMessage }}
        </v-snackbar>
        <v-card-title class="justify-center">
          <h2>Вход</h2>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="login"
            class="pa-4"
          >
            <v-text-field
              v-model="name"
              :counter="16"
              outlined
              rounded
              :rules="nameRules"
              label="Имя"
              required
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              color="primary"
              class="rounded-xl"
              height="45"
              block
              type="submit"
              >Войти</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'login',
  layout: 'LoginLayout',
  data: () => ({
    snackbar: false,
    snackMessage: '',
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Введите имя',
      (v) => (v && v.length <= 16) || 'Имя не должно превышать 16 символов',
      (v) => v.length > 2 || 'Имя не может быть меньше 3-х символов',
    ],
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setUser', this.name)
        this.$router.push('/chat')
      } else console.log('error')
    },
  },
  mounted() {
    const { message } = this.$route.query
    if (message === 'login') {
      this.snackMessage = 'Введите имя'
    }
    this.snackbar = !!this.snackMessage
  },
}
</script>
