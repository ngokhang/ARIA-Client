<template>
  <div
    class="fixed inset-0 z-[9999] !m-[unset] flex h-screen w-screen items-center justify-center overflow-hidden overscroll-contain bg-slate-900/90 shadow-lg backdrop-blur transition-opacity duration-300"
    :class="
      isLightMode
        ? 'bg-gray-200/90 shadow-gray-950/30'
        : 'bg-slate-900/90 shadow-lg'
    "
  >
    <dialog
      open
      class="flex h-auto max-h-[90vh] w-[80%] flex-col gap-8 overflow-y-auto overscroll-contain rounded-lg p-6"
      :class="
        isLightMode
          ? 'border-gray-200 bg-white shadow-gray-950/30'
          : 'border-gray-700 bg-slate-800/80 shadow-lg'
      "
    >
      <div class="flex items-center justify-between">
        <slot name="title">
          <h2 class="text-2xl font-bold">Tiêu đề Modal</h2>
        </slot>
        <button
          class="rounded p-2 transition-colors"
          :class="
            isLightMode
              ? 'bg-white text-slate-900 hover:bg-black/5'
              : 'bg-slate-800/80 text-white hover:bg-white/10'
          "
          type="button"
          @click="$emit('clickOutsideModal')"
        >
          <X class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <slot name="content"></slot>
    </dialog>
  </div>
</template>

<script>
import { X } from 'lucide-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ModalComponent',
  components: {
    X,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      previousBodyOverflow: '',
      previousHtmlOverflow: '',
      isScrollLocked: false,
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          this.lockPageScroll()
          return
        }

        this.unlockPageScroll()
      },
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
    this.unlockPageScroll()
  },
  methods: {
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.$emit('clickOutsideModal')
      }
    },
    lockPageScroll() {
      if (this.isScrollLocked) {
        return
      }

      this.previousBodyOverflow = document.body.style.overflow
      this.previousHtmlOverflow = document.documentElement.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      this.isScrollLocked = true
    },
    unlockPageScroll() {
      if (!this.isScrollLocked) {
        return
      }

      document.body.style.overflow = this.previousBodyOverflow
      document.documentElement.style.overflow = this.previousHtmlOverflow
      this.isScrollLocked = false
    },
  },
}
</script>
