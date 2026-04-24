<template>
  <header
    :class="
      clsx(
        'sticky top-0 z-50 max-h-[128px] border-b-2 px-6 py-4 shadow-sm transition-colors duration-300 ease-in-out',
        isLightMode
          ? 'border-b bg-white text-black'
          : 'border-b-slate-700 bg-slate-900 text-slate-50'
      )
    "
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6">
      <router-link class="flex items-center gap-3 no-underline" to="/">
        <span class="text-2xl font-bold tracking-normal text-current">
          ARIA
        </span>
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          class="relative font-semibold text-current no-underline transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:text-zinc-500 hover:after:scale-x-100"
          :to="item.to"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <HamburgerNav
          class="md:hidden"
          :open="isSidebarOpen"
          @toggleSidebar="toggleSidebar"
        />
      </div>
    </div>

    <DrawerComponent
      :open="isSidebarOpen"
      :items="sidebarItems"
      @close="toggleSidebar"
    >
      test
    </DrawerComponent>
  </header>
</template>

<script>
import { clsx } from 'clsx'
import { mapGetters } from 'vuex'
import HamburgerNav from './HamburgerNav.vue'
import ThemeToggle from './ThemeToggle.vue'
import DrawerComponent from './DrawerComponent.vue'
export default {
  name: 'HeaderComponent',
  components: {
    HamburgerNav,
    ThemeToggle,
    DrawerComponent,
  },
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  computed: {
    ...mapGetters(['isLightMode', 'navItems', 'sidebarItems']),
  },
  methods: {
    clsx,
    toggleMode() {
      this.$store.dispatch('toggleLightMode')
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
}
</script>
