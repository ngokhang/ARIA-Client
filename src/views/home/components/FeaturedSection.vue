<template>
  <section
    ref="sectionRoot"
    :class="
      isSectionVisible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-10 opacity-0'
    "
    class="featured-section relative z-10 mt-24 w-full max-w-full transition duration-700 ease-out"
  >
    <div
      class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div class="max-w-2xl">
        <p
          class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500"
        >
          Bộ sưu tập
        </p>
        <h2
          :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
          class="mt-3 text-3xl font-black tracking-tight md:text-4xl"
        >
          Những khoảnh khắc nổi bật
        </h2>
        <p
          :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
          class="mt-4 max-w-xl leading-7"
        >
          Lưu lại những hình ảnh, thước phim và cảm xúc đáng nhớ nhất trong hành
          trình biểu diễn của Ngô Khang.
        </p>
      </div>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <div
        v-for="moment in featuredMoments"
        :key="moment.title"
        :class="
          isLightMode
            ? 'border-white/70 bg-white/80 shadow-slate-900/10'
            : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
        "
        class="group relative overflow-hidden rounded-3xl border p-2 shadow-xl backdrop-blur"
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

    <div class="mt-10 flex justify-center">
      <router-link
        class="rounded-full bg-[#35495e] px-7 py-3 font-semibold text-white shadow-lg shadow-[#35495e]/20 transition hover:-translate-y-1 hover:bg-[#42b883]"
        to="/images"
      >
        Xem thêm
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FeaturedSection',
  data() {
    return {
      featuredMoments: [
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
      isSectionVisible: false,
      sectionObserver: null,
    }
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
  mounted() {
    this.$nextTick(this.observeSection)
  },
  beforeDestroy() {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect()
    }
  },
  methods: {
    observeSection() {
      if (!('IntersectionObserver' in window)) {
        this.isSectionVisible = true
        return
      }

      this.sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return
          }

          this.isSectionVisible = true
          this.sectionObserver.disconnect()
        },
        {
          rootMargin: '0px 0px -15% 0px',
          threshold: 0.2,
        }
      )

      this.sectionObserver.observe(this.$refs.sectionRoot)
    },
  },
}
</script>
