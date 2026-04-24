<template>
  <nav>
    <button
      type="button"
      :class="
        clsx(
          'group inline-flex items-center gap-2 rounded-full p-1 text-black transition-colors duration-300 ease-in-out',
          isLightMode ? 'text-black' : 'text-white'
        )
      "
      @click="toggleSidebar"
    >
      <Menu class="h-4 w-4" aria-hidden="true" />
    </button>
  </nav>
</template>

<script>
import { Menu } from 'lucide-vue'
import { clsx } from 'clsx'
import { mapGetters } from 'vuex'
export default {
  name: 'HamburgerNav',
  components: {
    Menu,
  },
  methods: {
    clsx,
    toggleSidebar() {
      this.$emit('toggleSidebar')
    },
  },
  computed: {
    ...mapGetters(['isLightMode', 'isSidebarOpen']),
  },
}
</script>
