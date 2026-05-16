<template>
  <section class="space-y-12 py-6" ref="galleryViewRef">
    <div>
      <h2
        class="hero-copy text-center text-3xl font-bold tracking-tight sm:text-4xl"
        :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
      >
        Thư viện hình ảnh
      </h2>
      <p
        class="hero-image mx-auto mt-4 max-w-xl text-center text-lg leading-8"
        :class="isLightMode ? 'text-slate-600' : 'text-slate-400'"
      >
        Những khoảnh khắc đáng nhớ từ các buổi biểu diễn của Ngô Khang.
      </p>
    </div>
    <div class="hero-image grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="moment in imageList.slice(0, 9)"
        :key="moment.title + Math.random()"
        :class="
          isLightMode
            ? 'border-white/70 bg-white/80 shadow-slate-900/10'
            : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
        "
        class="group relative cursor-pointer overflow-hidden rounded-3xl border p-2 shadow-xl backdrop-blur transition hover:shadow-emerald-500/50"
        @click="showModalViewDetail(moment)"
      >
        <div class="relative overflow-hidden rounded-[1.35rem]">
          <img
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            :src="moment.src"
            :alt="moment.title"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
          ></div>
          <div
            v-if="moment.type === 'video'"
            class="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#42b883] shadow-lg backdrop-blur"
          >
            <span class="ml-0.5 text-lg">▶</span>
          </div>
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span
              class="inline-flex rounded-full bg-[#42b883]/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]"
            >
              {{ moment.type === 'video' ? 'Video' : 'Ảnh' }}
            </span>
            <h3 class="mt-3 text-xl font-bold">
              {{ moment.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <ModalComponent
      v-show="this.isShowModalDetail"
      :is-open="isShowModalDetail"
      @clickOutsideModal="clickOutsideModal"
    >
      <template #title>
        <h2
          class="font-bold lg:text-2xl"
          :class="isLightMode ? 'text-black' : 'text-white'"
        >
          {{ selectedResource ? selectedResource.title : '' }}
        </h2>
      </template>
      <template #content>
        <ModalDetailContent :resource="selectedResource" />
      </template>
    </ModalComponent>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalComponent from '@/components/common/ModalComponent.vue'
import ModalDetailContent from './gallery/ModalDetailContent.vue'

export default {
  name: 'GalleryView',
  components: {
    ModalComponent,
    ModalDetailContent,
  },
  data() {
    return {
      imageList: [
        {
          title: 'Ánh đèn sân khấu',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Khoảnh khắc live',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          title: 'Hậu trường biểu diễn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Cảm xúc khán giả',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Đêm nhạc acoustic',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Sân khấu lớn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1374&auto=format&fit=crop',
        },
        {
          title: 'Ánh đèn sân khấu',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Khoảnh khắc live',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          title: 'Hậu trường biểu diễn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Cảm xúc khán giả',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Đêm nhạc acoustic',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Sân khấu lớn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1374&auto=format&fit=crop',
        },
        {
          title: 'Ánh đèn sân khấu',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Khoảnh khắc live',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          title: 'Hậu trường biểu diễn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Cảm xúc khán giả',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Đêm nhạc acoustic',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Sân khấu lớn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1374&auto=format&fit=crop',
        },
        {
          title: 'Ánh đèn sân khấu',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Khoảnh khắc live',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          title: 'Hậu trường biểu diễn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Cảm xúc khán giả',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Đêm nhạc acoustic',
          type: 'video',
          src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop',
        },
        {
          title: 'Sân khấu lớn',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1374&auto=format&fit=crop',
        },
      ],
      isShowModalDetail: false,
      selectedResource: null,
    }
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
  mounted() {
    console.log('GalleryView mounted', this.$refs.galleryViewRef)
  },
  methods: {
    showModalViewDetail(resource) {
      this.selectedResource = resource
      this.isShowModalDetail = !this.isShowModalDetail
    },
    clickOutsideModal() {
      this.isShowModalDetail = false
    },
  },
}
</script>

<style scoped>
.hero-copy {
  animation: fade-slide-up 0.8s ease-out both;
}

.hero-image {
  animation: fade-scale-in 0.9s ease-out 0.15s both;
}

@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateX(28px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-scale-in {
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
