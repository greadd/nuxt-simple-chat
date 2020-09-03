export default function ({redirect, app }) {
  if (!app.$cookies.get('user')) {
    redirect('/?message=login')
  }
}
