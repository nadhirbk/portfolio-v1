export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://portfolio-nadhirbk.vercel.app/sitemap.xml',
  }
}
