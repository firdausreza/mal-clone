import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faSpinner, faBars, faMagnifyingGlass, faCrown } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faChevronDown, faSpinner, faBars, faMagnifyingGlass, faCrown);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})