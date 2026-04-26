import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const HASH_SCROLL_OFFSET = 112
const HASH_SCROLL_DURATION = 1200
const PROGRAMMATIC_SCROLL_START_EVENT = 'app:programmatic-scroll-start'
const PROGRAMMATIC_SCROLL_END_EVENT = 'app:programmatic-scroll-end'

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2
}

function smoothScrollTo(targetY, onComplete) {
  const startY = window.pageYOffset
  const distance = targetY - startY
  const startTime = performance.now()

  function step(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / HASH_SCROLL_DURATION, 1)

    window.scrollTo(0, startY + distance * easeInOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(step)
      return
    }

    if (onComplete) {
      onComplete()
    }
  }

  requestAnimationFrame(step)
}

function scrollToHash(hash) {
  const targetElement = document.querySelector(hash)

  if (!targetElement) {
    return
  }

  const targetY = Math.max(
    window.pageYOffset +
      targetElement.getBoundingClientRect().top -
      HASH_SCROLL_OFFSET,
    0
  )

  window.dispatchEvent(
    new CustomEvent(PROGRAMMATIC_SCROLL_START_EVENT, {
      detail: { hash },
    })
  )

  smoothScrollTo(targetY, () => {
    window.dispatchEvent(new CustomEvent(PROGRAMMATIC_SCROLL_END_EVENT))
  })
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}`
  )
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      fullWidth: true,
      noLayout: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      requestAnimationFrame(() => scrollToHash(to.hash))
      return false
    }

    return { x: 0, y: 0 }
  },
})

export default router
