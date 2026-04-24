<template>
  <button
    :class="
      clsx(
        'group inline-flex items-center gap-2 rounded-full p-1 text-black transition-colors duration-300 ease-in-out hover:bg-black',
        isLightMode
          ? 'text-black hover:text-white'
          : 'text-white hover:bg-white hover:text-black'
      )
    "
    type="button"
    @click="toggleMode"
  >
    <Sun
      v-if="isLightMode"
      class="h-4 w-4 rotate-0 transition-transform duration-300 ease-out group-hover:rotate-180"
      aria-hidden="true"
    />
    <Moon v-if="!isLightMode" class="h-4 w-4" aria-hidden="true" />
  </button>
</template>

<script>
import { Moon, Sun } from 'lucide-vue'
import { clsx } from 'clsx'
import { mapGetters } from 'vuex'

export default {
  name: 'ThemeToggle',
  components: {
    Moon,
    Sun,
  },
  methods: {
    clsx,
    toggleMode() {
      this.$store.dispatch('toggleLightMode')
    },
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>
