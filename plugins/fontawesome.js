import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faClose,
  faTableList,
  faSliders,
  faPrescriptionBottle,
  faSearch,
  faPlus,
  faCaretUp,faRefresh,
  faCaretRight,
  faEllipsisVertical,faEllipsisH,
  faCaretDown,
  faStar as faStarO,faInbox,faPaperPlane,faTrash,faCircle,
  faShoppingBasket,faSort,faSortUp,faSortDown,
  faChevronRight,faChevronLeft,faChevronUp,faChevronDown,faCircleCheck
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faClock, faStar, faCalendar } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false
library.add(faCircleCheck,faRefresh,faInbox,faPaperPlane,faTrash,faCircle,faSortUp,faSortDown,faSort,faEllipsisH,faClose,faChevronRight,faChevronLeft,faChevronUp,faChevronDown,faEllipsisVertical, faCaretRight, faTableList, faSliders, faSearch, faPrescriptionBottle, faTwitter, faClock, faStar, faPlus, faCalendar, faCaretUp, faCaretDown, faStarO, faShoppingBasket)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

