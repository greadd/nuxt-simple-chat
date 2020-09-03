<template>
  <v-app app>
    <v-app-bar fixed app class="navbar">
      <h3 class="white--text">Вы в чате: {{ user }}</h3>
      <v-spacer></v-spacer>
      <v-btn @click="logout" class="rounded-xl white--text" icon x-large>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #2a98ff;
  background-image: linear-gradient(0deg, #2a98ff 0%, #79baff 100%);
}
</style>
