<template>
  <div
    id="app"
    :class="
      clsx(
        'min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 ease-in-out',
        isLightMode
          ? 'bg-slate-50 text-slate-900'
          : 'bg-slate-900 text-slate-50'
      )
    "
  >
    <AppLayout>
      <router-view class="p-6" />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue'
import { clsx } from 'clsx'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AppLayout,
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
  methods: {
    clsx,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav a.router-link-exact-active {
  color: #10b981;
}
</style>
