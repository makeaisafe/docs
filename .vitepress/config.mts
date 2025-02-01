import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  title: "Make AI Safe",
  description: "Design, Methodology, and Initial Findings",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collection', link: '/articles/about/collection' }
    ],

    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Methodology', link: '/articles/about/methodology' },
          { text: 'Collection', link: '/articles/about/collection' },
        ]
      },
      {
        text: 'Discrimination & Toxicity',
        items: [
          { text: 'Unfair discrimination and misrepresentation', link: '/articles/discrimination-and-toxicity/unfair-discrimination-and-misrepresentation' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          {
            text: 'API Examples',
            collapsed: true, // This makes the section collapsible
            items: [
              { text: 'Runtime API', link: '/api-examples/runtime' },
              { text: 'Build API', link: '/api-examples/build' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
