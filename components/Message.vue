<template>
  <div class="message-wrapper my-2">
    <v-card class="message rounded-xl px-4" :class="{ active }">
      <v-row justify="space-between" class="pa-3">
        <strong class="mr-1">{{ user }}</strong>
        <small>{{ time }}</small>
      </v-row>
      <p>{{ text }}</p>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    user: String,
    text: String,
    time: String,
    active: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.message-wrapper {
  display: flex;
  flex-direction: column;
}
.message {
  block-size: auto;
  min-width: 200px;
  align-self: flex-start;
}
.active {
  background-color: #2a98ff;
  background-image: linear-gradient(0deg, #2a98ff 0%, #79baff 100%);
  color: white;
  align-self: flex-end;
}
</style>
