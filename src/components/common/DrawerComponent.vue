<template>
  <teleport to="body">
    <!-- Overlay -->
    <div
      v-show="open"
      class="fixed inset-0 z-[999] bg-black/40 transition-opacity duration-300"
      :class="open ? 'opacity-100' : 'opacity-0'"
      @click="$emit('close')"
    />

    <!-- Panel -->
    <aside
      class="fixed right-0 top-0 z-[1000] h-screen w-[50vw] min-w-[320px] max-w-[480px] bg-white shadow-2xl transition-transform duration-300 ease-in-out"
      :class="open ? 'translate-x-0' : 'translate-x-full'"
      @click.stop
    >
      <div class="flex items-center justify-end p-4">
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
  </teleport>
</template>

<script>
import { X } from 'lucide-vue'
export default {
  name: 'DrawerComponent',
  props: {
    open: { type: Boolean, default: false },
  },
  components: {
    X,
  },
}
</script>
