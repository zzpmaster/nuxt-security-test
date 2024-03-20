// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-security', '@nuxt/devtools'],
  security: {
    enabled: true,
    // Options
    headers: {
      crossOriginResourcePolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: false,
      permissionsPolicy: false,
      xDownloadOptions: false,
      xXSSProtection: false,
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: false,
      contentSecurityPolicy: {
        'img-src': [
          "'self'",
          'data:',
          'https://*.googleapis.com',
          'https://*.gstatic.com',
          '*.google.com',
          '*.googleusercontent.com',
        ],
      },
    },
    // rateLimiter: {
    //   tokensPerInterval: 3,
    //   interval: 10000
    // }
  }
})