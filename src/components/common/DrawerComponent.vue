<template>
  <div>
    <!-- Overlay -->
    <transition name="drawer-overlay">
      <div
        v-if="open"
        class="fixed inset-0 z-[999] bg-black/40"
        @click="$emit('close')"
      />
    </transition>

    <!-- Panel -->
    <transition name="drawer-panel">
      <aside
        v-if="open"
        :class="
          clsx(
            'fixed right-0 top-0 z-[1000] h-screen w-[50vw] min-w-[320px] max-w-[480px] shadow-2xl',
            isLightMode ? 'bg-white' : 'bg-slate-900'
          )
        "
        @click.stop
      >
        <div class="flex items-center justify-between p-4">
          <slot name="title">
            <span></span>
          </slot>
          <button
            class="rounded p-2 hover:bg-black/5"
            type="button"
            @click="$emit('close')"
          >
            <X class="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div class="p-4">
          <slot />
        </div>
      </aside>
    </transition>
  </div>
</template>

<script>
import { X } from 'lucide-vue'
import { clsx } from 'clsx'
import { mapGetters } from 'vuex'
export default {
  name: 'DrawerComponent',
  props: {
    open: { type: Boolean, default: false },
  },
  components: {
    X,
  },
  methods: {
    clsx,
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>

<style scoped>
.drawer-overlay-enter-active,
.drawer-overlay-leave-active {
  transition: opacity 300ms ease-in-out;
}

.drawer-overlay-enter,
.drawer-overlay-leave-to {
  opacity: 0;
}

.drawer-panel-enter-active,
.drawer-panel-leave-active {
  transition: transform 300ms ease-in-out;
}

.drawer-panel-enter,
.drawer-panel-leave-to {
  transform: translateX(100%);
}
</style>
