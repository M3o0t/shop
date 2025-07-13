import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //i wrote this line to deploy the project , shop is the repo name
  base :'/shop/'
})
