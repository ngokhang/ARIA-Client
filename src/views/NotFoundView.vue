<template>
  <section
    class="relative flex min-h-[calc(100vh-220px)] items-center justify-center overflow-hidden py-20"
  >
    <div
      class="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#42b883]/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl"
    ></div>

    <div
      :class="
        isLightMode
          ? 'border-white/70 bg-white/80 shadow-slate-900/10'
          : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
      "
      class="relative w-full max-w-3xl rounded-[2rem] border p-8 text-center shadow-2xl backdrop-blur md:p-12"
    >
      <p
        class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500"
      >
        Không tìm thấy trang
      </p>
      <h1
        class="mt-5 bg-gradient-to-r from-[#35495e] to-[#42b883] bg-clip-text text-8xl font-black tracking-tight text-transparent md:text-9xl"
      >
        404
      </h1>
      <h2
        :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
        class="mt-6 text-3xl font-black tracking-tight md:text-5xl"
      >
        Lạc nhịp mất rồi
      </h2>
      <p
        :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
        class="mx-auto mt-4 max-w-xl text-lg leading-8"
      >
        Trang bạn đang tìm không tồn tại hoặc đã được chuyển sang một địa chỉ
        khác. Hãy quay lại trang chủ để tiếp tục theo dõi hành trình âm nhạc của
        Ngô Khang.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <router-link
          class="rounded-full bg-[#35495e] px-7 py-3 font-semibold text-white shadow-lg shadow-[#35495e]/20 transition hover:-translate-y-1 hover:bg-[#42b883]"
          to="/"
        >
          Về trang chủ
        </router-link>
        <router-link
          :class="
            isLightMode
              ? 'border-slate-300 text-slate-800 hover:border-[#42b883] hover:text-[#42b883]'
              : 'border-slate-600 text-slate-100 hover:border-emerald-300 hover:text-emerald-300'
          "
          class="rounded-full border px-7 py-3 font-semibold transition hover:-translate-y-1"
          to="/#achievements"
        >
          Xem thành tựu
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NotFoundView',
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>
