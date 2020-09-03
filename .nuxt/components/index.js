export { default as Message } from '../../components/Message.vue'
export { default as MessageForm } from '../../components/MessageForm.vue'

export const LazyMessage = import('../../components/Message.vue' /* webpackChunkName: "components/Message" */).then(c => c.default || c)
export const LazyMessageForm = import('../../components/MessageForm.vue' /* webpackChunkName: "components/MessageForm" */).then(c => c.default || c)
