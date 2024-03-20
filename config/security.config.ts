// import type { NuxtConfig } from 'nuxt/config';

// export function securityConfig(): NuxtConfig['security'] {
//     return {
//       // enabled: process.env.MODE === 'prod',
//       enabled: false,
//       headers: {
//         crossOriginResourcePolicy: false,
//         crossOriginOpenerPolicy: false,
//         crossOriginEmbedderPolicy: false,
//         permissionsPolicy: false,
//         xDownloadOptions: false,
//         xXSSProtection: false,
//         xFrameOptions: 'DENY',
//         xContentTypeOptions: 'nosniff',
//         xDNSPrefetchControl: false,
//         contentSecurityPolicy: {
//           'img-src': [
//             "'self'",
//             'data:',
//             'https://*.googleapis.com',
//             'https://*.gstatic.com',
//             '*.google.com',
//             '*.googleusercontent.com',
//           ],
//         },
//       },
//     };
//   }