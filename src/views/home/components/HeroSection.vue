<template>
  <section
    class="relative grid min-h-[calc(100vh-180px)] items-center gap-12 overflow-visible py-16 md:grid-cols-2"
  >
    <div class="pointer-events-none absolute inset-0">
      <div
        :class="isLightMode ? 'bg-emerald-300/30' : 'bg-emerald-400/20'"
        class="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
      ></div>
      <div
        :class="isLightMode ? 'bg-teal-300/20' : 'bg-cyan-400/10'"
        class="absolute bottom-0 right-10 h-80 w-80 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="hero-copy relative z-10 space-y-7">
      <div
        :class="
          isLightMode
            ? 'border-emerald-200 bg-white/80 text-emerald-600'
            : 'border-emerald-400/30 bg-slate-800/80 text-emerald-300'
        "
        class="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        Ca sĩ trẻ đầy cảm xúc
      </div>

      <div class="space-y-4">
        <h1
          :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
          class="text-5xl font-black tracking-tight md:text-7xl"
        >
          Ngô
          <span
            class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
          >
            Khang
          </span>
        </h1>
        <p
          :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
          class="max-w-xl text-lg leading-8"
        >
          Ngô Khang là ca sĩ trẻ theo đuổi phong cách biểu diễn giàu cảm xúc,
          kết hợp chất giọng ấm áp với tinh thần hiện đại. Anh mong muốn mang
          đến những ca khúc gần gũi, chạm vào câu chuyện tình yêu, tuổi trẻ và
          hành trình tìm kiếm chính mình.
        </p>
      </div>

      <div class="flex flex-wrap gap-4">
        <router-link
          :class="
            isLightMode
              ? 'bg-[#35495e] shadow-[#35495e]/20 hover:bg-[#42b883]'
              : 'bg-[#42b883] shadow-[#42b883]/20 hover:bg-emerald-400'
          "
          class="rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
          to="/music"
        >
          Nghe nhạc ngay
        </router-link>
        <router-link
          :class="
            isLightMode
              ? 'border-slate-300 text-slate-800 hover:border-[#42b883] hover:text-[#42b883]'
              : 'border-slate-600 text-slate-100 hover:border-emerald-300 hover:text-emerald-300'
          "
          class="rounded-full border px-6 py-3 font-semibold transition hover:-translate-y-1"
          to="/schedule"
        >
          Xem lịch diễn
        </router-link>
      </div>
    </div>

    <div class="hero-image relative z-10 p-4">
      <div
        :class="
          isLightMode
            ? 'from-[#42b883]/40 to-teal-300/40'
            : 'from-[#42b883]/30 to-cyan-300/20'
        "
        class="absolute inset-0 rounded-[2rem] bg-gradient-to-tr blur-2xl"
      ></div>
      <div
        :class="
          isLightMode
            ? 'border-white/60 bg-white shadow-slate-900/20'
            : 'border-emerald-300/20 bg-slate-800 shadow-emerald-950/40'
        "
        class="relative overflow-hidden rounded-[2rem] border p-2 shadow-2xl"
      >
        <img
          class="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[560px]"
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
          alt="Micro trên sân khấu biểu diễn"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeroSection',
  computed: {
    ...mapGetters(['isLightMode']),
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
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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
