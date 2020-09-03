<template>
  <div class="chat-wrapper">
    <div class="chat" ref="chat">
      <Message
        v-for="msg in messages"
        :key="msg.id"
        :user="msg.user"
        :text="msg.text"
        :time="msg.time"
        :active="msg.user === user"
      />
    </div>
    <div class="message-form">
      <MessageForm />
    </div>
  </div>
</template>
<script>
import Message from '@/components/Message'
import MessageForm from '@/components/MessageForm'
export default {
  layout: 'ChatLayout',
  middleware: ['chat'],
  async fetch({ store }) {
    await store.dispatch('fetchMessages')
  },
  data: () => ({
    polling: null,
    timeout: null,
  }),
  components: {
    MessageForm,
    Message,
  },
  computed: {
    messages() {
      return this.$store.getters.messages
    },
    user() {
      return this.$store.getters.user
    },
  },
  watch: {
    messages() {
      this.timeout = setTimeout(() => {
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
      })
    },
  },
  methods: {
    fetchMessages() {
      this.polling = setInterval(() => {
        this.$store.dispatch('fetchMessages')
      }, 1000)
    },
  },
  mounted() {
    this.fetchMessages()
  },
  beforeDestroy() {
    clearInterval(this.polling)
    clearTimeout(this.timeout)
  },
}
</script>

<style scoped>
.chat-wrapper {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 90px);
}
.chat {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  padding: 1rem;
  overflow-y: auto;
}
.message-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 1rem;
}
</style>
