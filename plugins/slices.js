import Vue from 'vue'

import highlight from '~/components/slices/highlight'
import imageGallery from '~/components/slices/imageGallery'
import columnedContent from '~/components/slices/columnedContent'

import workCard from '~/components/work/workCard'

// Utilities
import responsiveVideo from '~/components/utilities/responsiveVideo'

Vue.component('highlight', highlight)
Vue.component('imageGallery', imageGallery)
Vue.component('columnedContent', columnedContent)

Vue.component('workCard', workCard)

Vue.component('responsiveVideo', responsiveVideo)
