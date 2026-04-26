<template>
  <footer
    :class="
      isLightMode
        ? 'border-slate-200 bg-white text-slate-950'
        : 'border-white/10 bg-black text-white'
    "
    class="border-t transition-colors duration-300 ease-in-out"
  >
    <div
      class="max-w-8xl mx-auto flex flex-col gap-6 px-6 py-5 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <router-link class="text-base font-bold tracking-tight" to="/">
          ARIA
        </router-link>
        <p
          :class="isLightMode ? 'text-slate-400' : 'text-white/35'"
          class="mt-1 text-xs"
        >
          © 2026. All rights reserved.
        </p>
      </div>

      <div
        :class="isLightMode ? 'text-slate-500' : 'text-white/65'"
        class="flex items-center gap-8 text-sm"
      >
        <div class="flex items-center gap-4">
          <a
            v-for="item in socialLinks"
            :key="item.label"
            class="transition hover:-translate-y-0.5 hover:opacity-100"
            :href="item.href"
            :aria-label="item.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-4 w-4 object-contain opacity-70"
              :src="item.icon"
              :alt="item.label"
            />
          </a>
        </div>

        <nav class="flex items-center gap-8">
          <router-link
            :class="isLightMode ? 'hover:text-slate-950' : 'hover:text-white'"
            class="transition"
            to="/contact"
          >
            Liên hệ
          </router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterComponent',
  data() {
    return {
      socialLinks: [
        {
          label: 'Facebook',
          href: '#',
          icon: '/facebook_logo.png',
        },
        {
          label: 'Tiktok',
          href: '#',
          icon: '/tiktok_logo.png',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>
