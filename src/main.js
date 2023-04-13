import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import Commit from './commit.json'

const app = createApp(App)

app.config.globalProperties.$domain = import.meta.env.VITE_DOMAIN
app.config.globalProperties.$title = import.meta.env.VITE_TITLE
app.config.globalProperties.$author = import.meta.env.VITE_AUTHOR
app.config.globalProperties.$userName = import.meta.env.VITE_USER_NAME
app.config.globalProperties.$email = import.meta.env.VITE_EMAIL
app.config.globalProperties.$githubName = import.meta.env.VITE_GITHUB_NAME
app.config.globalProperties.$repositoryName = import.meta.env.VITE_REPOSITORY_NAME
app.config.globalProperties.$consoleCommandMaxLength = import.meta.env.VITE_CONSOLE_COMMAND_MAX_LENGTH

app.config.globalProperties.$commit = Commit.commit

app.mount('#app')