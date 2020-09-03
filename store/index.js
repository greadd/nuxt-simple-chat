export const state = () => ({
  messages: [],
  user: '',
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setMessages(state, messages) {
    state.messages = messages
  },
  addMessage(state, message) {
    state.messages.push(message)
  },
  clearData(state) {
    ;(state.user = ''), (state.messages = [])
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const user = this.$cookies.get('user')
    commit('setUser', user)
  },
  setUser({ commit }, user) {
    this.$cookies.set('user', user)
    commit('setUser', user)
  },
  async fetchMessages({ commit, state }) {
    const messages = await this.$axios.$get('http://localhost:3004/messages')
    if (messages.length !== state.messages.length) {
      commit('setMessages', messages)
    }
  },
  async addMessage({ commit }, message) {
    const newMessage = await this.$axios.$post(
      'http://localhost:3004/messages',
      message
    )
    commit('addMessage', newMessage)
  },
  logout({ commit }) {
    this.$cookies.remove('user')
    commit('clearData')
  },
}
export const getters = {
  messages: (state) => state.messages,
  user: (state) => state.user,
}
