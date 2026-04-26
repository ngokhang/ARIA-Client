<template>
  <div class="min-h-screen">
    <HeaderComponent />

    <main :class="$route.meta.fullWidth ? 'p-6' : 'max-w-8xl mx-auto p-6'">
      <slot />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'

export default {
  name: 'AppLayout',
  components: {
    FooterComponent,
    HeaderComponent,
  },
}
</script>
