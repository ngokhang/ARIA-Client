<template>
  <div
    id="achievements"
    ref="sectionRoot"
    class="achievement-roadmap relative z-10 w-full max-w-full scroll-mt-28 md:col-span-2"
  >
    <div class="grid min-w-0 gap-12 lg:grid-cols-2 lg:items-start">
      <div
        :class="
          isSectionVisible
            ? 'translate-x-0 opacity-100'
            : '-translate-x-10 opacity-0'
        "
        class="relative min-w-0 transition duration-700 ease-out lg:sticky lg:top-28"
      >
        <div
          :class="
            isLightMode
              ? 'border-white/70 bg-white/80 shadow-slate-900/10'
              : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
          "
          class="relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl backdrop-blur"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#42b883]/25 via-transparent to-teal-300/20"
          ></div>
          <img
            class="relative h-[420px] w-full rounded-[1.5rem] object-cover lg:h-[720px]"
            :src="activeRoadmapItem.image"
            alt="Ca sĩ đang biểu diễn trên sân khấu"
          />
          <div
            :class="
              isLightMode
                ? 'bg-white/90 text-slate-900'
                : 'bg-slate-950/80 text-slate-50'
            "
            class="absolute bottom-6 left-6 right-6 rounded-2xl p-5 shadow-xl backdrop-blur"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500"
            >
              {{ activeRoadmapItem.year }}
            </p>
            <h2 class="mt-2 text-2xl font-black">
              {{ activeRoadmapItem.title }}
            </h2>
            <p
              :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
              class="mt-2 leading-7"
            >
              {{ activeRoadmapItem.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        :class="
          isSectionVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-10 opacity-0'
        "
        class="min-w-0 transition delay-150 duration-700 ease-out"
      >
        <div class="mb-10 max-w-2xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500"
          >
            Những thành tựu nổi bật
          </p>
          <h2
            :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
            class="mt-3 text-3xl font-black tracking-tight md:text-4xl"
          >
            Hành trình của Ngô Khang
          </h2>
        </div>

        <div class="relative min-w-0 space-y-6 pl-10 md:space-y-0 md:pl-0">
          <div
            class="absolute bottom-4 left-3 top-4 w-px bg-gradient-to-b from-[#42b883]/20 via-[#42b883] to-[#42b883]/20 md:left-1/2 md:-translate-x-1/2"
          ></div>

          <div
            v-for="(item, index) in achievementRoadmap"
            :key="item.year"
            ref="roadmapItems"
            :data-index="index"
            class="relative grid min-w-0 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6 md:py-6"
          >
            <span
              :class="
                activeRoadmapIndex === index
                  ? 'scale-125 bg-[#42b883]'
                  : 'bg-white'
              "
              class="absolute -left-[34px] top-7 h-5 w-5 rounded-full border-4 border-[#42b883] shadow-lg shadow-[#42b883]/30 transition md:hidden"
            ></span>

            <div
              :class="[
                (index + 1) % 2 === 0
                  ? 'md:col-start-3 md:text-left'
                  : 'md:col-start-1 md:text-right',
                activeRoadmapIndex === index
                  ? 'border-[#42b883] shadow-[#42b883]/20 ring-2 ring-[#42b883]/30'
                  : isLightMode
                    ? 'border-emerald-100 shadow-slate-900/10'
                    : 'border-emerald-300/20 shadow-emerald-950/30',
                isLightMode ? 'bg-white/80' : 'bg-slate-800/80',
              ]"
              class="group relative min-w-0 overflow-hidden rounded-3xl border p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1"
            >
              <div
                :class="
                  activeRoadmapIndex === index
                    ? 'bg-[#42b883]/30'
                    : 'bg-[#42b883]/20'
                "
                class="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full blur-2xl transition"
              ></div>
              <div class="relative space-y-3">
                <span
                  class="inline-flex rounded-full bg-[#42b883]/10 px-3 py-1 text-sm font-bold text-[#42b883]"
                >
                  {{ String(index + 1).padStart(2, '0') }} / {{ item.year }}
                </span>
                <h3
                  :class="isLightMode ? 'text-slate-900' : 'text-slate-50'"
                  class="text-xl font-bold"
                >
                  {{ item.title }}
                </h3>
                <p
                  :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
                  class="leading-7"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div
              :class="
                activeRoadmapIndex === index
                  ? 'scale-125 bg-[#42b883]'
                  : 'bg-white'
              "
              class="hidden h-5 w-5 rounded-full border-4 border-[#42b883] shadow-lg shadow-[#42b883]/30 transition md:col-start-2 md:row-start-1 md:block"
            ></div>

            <div
              :class="
                (index + 1) % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'
              "
              class="hidden md:row-start-1 md:block"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AchievementsSection',
  data() {
    return {
      achievementRoadmap: [
        {
          year: '2019',
          title: 'Khởi đầu đam mê',
          description:
            'Bắt đầu luyện thanh, biểu diễn trong các buổi giao lưu nhỏ và định hình tình yêu với sân khấu.',
          image:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          year: '2020',
          title: 'Những sân khấu đầu tiên',
          description:
            'Xuất hiện tại các đêm nhạc địa phương, rèn luyện khả năng làm chủ sân khấu và cảm xúc.',
          image:
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          year: '2021',
          title: 'Xây dựng màu sắc riêng',
          description:
            'Theo đuổi chất giọng ấm, cách hát tự sự và phong cách phối khí hiện đại, gần gũi.',
          image:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          year: '2022',
          title: 'Ra mắt single đầu tay',
          description:
            'Phát hành ca khúc đầu tiên, đánh dấu bước chuyển từ đam mê sang hành trình chuyên nghiệp.',
          image:
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
        {
          year: '2023',
          title: 'Chạm tới khán giả trẻ',
          description:
            'Các bản live được chia sẻ rộng rãi, giúp tên tuổi Ngô Khang đến gần hơn với người nghe.',
          image:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop',
        },
        {
          year: '2024',
          title: 'Mở rộng sân khấu',
          description:
            'Tham gia nhiều đêm diễn lớn hơn và chuẩn bị cho dự án âm nhạc cá nhân tiếp theo.',
          image:
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
        },
      ],
      activeRoadmapIndex: 0,
      roadmapObserver: null,
      sectionObserver: null,
      isSectionVisible: false,
      isProgrammaticScrolling: false,
      isProgrammaticScrollingPastSection: false,
      programmaticScrollTargetHash: '',
    }
  },
  computed: {
    ...mapGetters(['isLightMode']),
    activeRoadmapItem() {
      return this.achievementRoadmap[this.activeRoadmapIndex]
    },
  },
  mounted() {
    window.addEventListener(
      'app:programmatic-scroll-start',
      this.handleProgrammaticScrollStart
    )
    window.addEventListener(
      'app:programmatic-scroll-end',
      this.handleProgrammaticScrollEnd
    )

    this.$nextTick(() => {
      this.observeSection()
      this.observeRoadmapItems()
    })
  },
  beforeDestroy() {
    if (this.roadmapObserver) {
      this.roadmapObserver.disconnect()
    }

    if (this.sectionObserver) {
      this.sectionObserver.disconnect()
    }

    window.removeEventListener(
      'app:programmatic-scroll-start',
      this.handleProgrammaticScrollStart
    )
    window.removeEventListener(
      'app:programmatic-scroll-end',
      this.handleProgrammaticScrollEnd
    )
  },
  methods: {
    handleProgrammaticScrollStart(event) {
      const targetHash = event.detail && event.detail.hash

      this.isProgrammaticScrolling = true
      this.programmaticScrollTargetHash = targetHash
      this.isProgrammaticScrollingPastSection = targetHash !== '#achievements'

      if (targetHash === '#achievements') {
        this.isSectionVisible = true
        this.activeRoadmapIndex = 0
      }
    },
    handleProgrammaticScrollEnd() {
      if (this.programmaticScrollTargetHash === '#achievements') {
        this.isSectionVisible = true
        this.activeRoadmapIndex = 0
      }

      this.isProgrammaticScrolling = false
      this.isProgrammaticScrollingPastSection = false
      this.programmaticScrollTargetHash = ''
    },
    observeSection() {
      if (!('IntersectionObserver' in window)) {
        this.isSectionVisible = true
        return
      }

      this.sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (this.isProgrammaticScrollingPastSection) {
            return
          }

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
    observeRoadmapItems() {
      if (!('IntersectionObserver' in window)) {
        return
      }

      const roadmapItems = this.$refs.roadmapItems || []

      this.roadmapObserver = new IntersectionObserver(
        (entries) => {
          if (this.isProgrammaticScrolling) {
            return
          }

          const visibleEntries = entries.filter((entry) => entry.isIntersecting)

          if (!visibleEntries.length) {
            return
          }

          visibleEntries.sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          )

          this.activeRoadmapIndex = Number(
            visibleEntries[0].target.dataset.index
          )
        },
        {
          rootMargin: '-35% 0px -35% 0px',
          threshold: [0.5],
        }
      )

      roadmapItems.forEach((item) => {
        this.roadmapObserver.observe(item)
      })
    },
  },
}
</script>
