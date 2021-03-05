module.exports = {
    images: {
      domains: ['cdn.btubecoin.com', 'videodelivery.net'],
    },
    i18n: {
        locales: ['pt', 'es', 'en'],
        defaultLocale: 'en'
    },
    async headers() {
      return [
        {
          source: '/video/:id',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            }
          ]
        },
        {
          source: '/login',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            }
          ]
        },
        {
          source: '/signup',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            }
          ]
        }
      ]
    }
  }