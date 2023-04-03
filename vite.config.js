import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
// https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // https: {
    //   pfx: PFX,
    //   passphrase: PFX_PASSPHRASE,
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:3500',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // ws: true,
        // debugging
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err)
          })
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url)
          })
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log(
              'Received Response from the Target:',
              proxyRes.statusCode,
              req.url
            )
          })
        },
      },
    },
  },
})
