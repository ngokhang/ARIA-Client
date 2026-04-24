<template>
  <div class="min-h-screen">
    <HeaderComponent />

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/common/HeaderComponent.vue'

export default {
  name: 'AppLayout',
  components: {
    HeaderComponent,
  },
}
</script>
