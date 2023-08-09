import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faSpinner, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add([faChevronDown, faSpinner, faBars, faMagnifyingGlass])

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})