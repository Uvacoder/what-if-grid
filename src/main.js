// Import global styles
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import DocsTocLayout from '~/layouts/DocsToc.vue'
import Section from '~/components/Section.vue'
import Card from '~/components/Card'

import VueScrollTo from 'vue-scrollto'

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: ['Jost', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Jost', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShareAlt, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

library.add(faShareAlt, faGithub, faSun, faMoon, faCoffee)

// Katex
import 'katex/dist/katex.min.css'

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('DocsTocLayout', DocsTocLayout)
  Vue.component('Section', Section)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })

  Vue.component('font-awesome-icon', FontAwesomeIcon)
}