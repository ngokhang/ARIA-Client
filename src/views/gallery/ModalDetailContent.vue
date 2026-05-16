<template>
  <div
    class="flex h-[calc(100%_-_40px)] flex-col rounded-lg bg-white shadow-lg backdrop-blur"
  >
    <div v-if="resource && resource.type === 'image'">
      <img
        :src="resource.src"
        alt="Image Detail"
        class="h-full w-full rounded-lg object-cover"
      />
    </div>
    <div
      v-else-if="resource && resource.type === 'video'"
      class="flex h-full items-center justify-center"
    >
      <video controls class="h-full w-full rounded-lg object-cover">
        <source :src="resource.src" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
    <div v-else class="flex h-full items-center justify-center">
      <p class="text-slate-500">Chọn một hình ảnh để xem chi tiết</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ModalDetailContent',
  props: {
    resource: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    console.log('Resource in ModalDetailContent:', this.resource)
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>
