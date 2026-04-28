<template>
  <section
    id="contact"
    class="contact-section relative z-10 mt-16 w-full max-w-full scroll-mt-24 px-4 pb-12 sm:mt-20 sm:px-6 sm:pb-16 lg:mt-24 lg:px-8"
  >
    <div
      :class="
        isLightMode
          ? 'border-white/70 bg-white/80 shadow-slate-900/10'
          : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
      "
      class="relative mx-auto w-full max-w-8xl overflow-hidden rounded-3xl border p-4 shadow-2xl backdrop-blur sm:p-6 md:p-8 lg:rounded-[2rem] lg:p-10"
    >
      <div
        class="absolute right-0 top-0 h-44 w-44 -translate-y-16 translate-x-16 rounded-full bg-[#42b883]/20 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72 lg:-translate-y-24 lg:translate-x-24"
      ></div>
      <div
        class="absolute bottom-0 left-0 h-44 w-44 -translate-x-16 translate-y-16 rounded-full bg-teal-300/20 blur-3xl sm:h-64 sm:w-64 lg:h-72 lg:w-72 lg:-translate-x-24 lg:translate-y-24"
      ></div>

      <div class="relative">
        <div class="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14">
          <p
            class="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-500 sm:text-sm sm:tracking-[0.3em]"
          >
            Liên hệ
          </p>
          <h2
            :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
            class="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
          >
            Kết nối với Ngô Khang
          </h2>
          <p
            :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
            class="mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7"
          >
            Theo dõi các kênh chính thức hoặc liên hệ trực tiếp để đặt lịch biểu
            diễn, hợp tác truyền thông và các dự án âm nhạc.
          </p>
        </div>

        <div
          class="grid min-w-0 gap-5 md:gap-6 xl:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] xl:gap-8"
        >
          <div class="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-1">
            <div
              :class="
                isLightMode
                  ? 'border-emerald-100 bg-white/80 text-slate-900 shadow-slate-900/10'
                  : 'border-emerald-300/20 bg-slate-900/70 text-slate-50 shadow-emerald-950/30'
              "
              class="min-w-0 rounded-2xl border p-4 shadow-xl backdrop-blur sm:p-5 lg:rounded-3xl lg:p-6"
            >
              <h3 class="text-xl font-black sm:text-2xl">
                Liên hệ trực tiếp
              </h3>
              <a
                class="mt-5 flex min-w-0 items-center gap-3 sm:gap-4 lg:mt-6"
                :href="`tel:${phoneNumber}`"
              >
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#42b883]/10 text-[#42b883] shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl"
                >
                  <Phone class="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
                <span class="min-w-0">
                  <span
                    :class="isLightMode ? 'text-slate-500' : 'text-slate-400'"
                    class="block text-sm font-semibold"
                  >
                    Điện thoại cá nhân
                  </span>
                  <span
                    class="mt-1 block overflow-wrap-anywhere text-base font-bold sm:text-xl"
                  >
                    {{ phoneLabel }}
                  </span>
                </span>
              </a>
              <a
                class="mt-5 flex min-w-0 items-center gap-3 sm:gap-4 lg:mt-6"
                :href="`mailto:${email}`"
              >
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#42b883]/10 text-[#42b883] shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl"
                >
                  <Mail class="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
                <span class="min-w-0">
                  <span
                    :class="isLightMode ? 'text-slate-500' : 'text-slate-400'"
                    class="block text-sm font-semibold"
                  >
                    Email
                  </span>
                  <span
                    class="mt-1 block overflow-wrap-anywhere text-base font-bold sm:text-xl"
                  >
                    {{ email }}
                  </span>
                </span>
              </a>
            </div>

            <div
              :class="
                isLightMode
                  ? 'border-emerald-100 bg-white/80 text-slate-900 shadow-slate-900/10'
                  : 'border-emerald-300/20 bg-slate-900/70 text-slate-50 shadow-emerald-950/30'
              "
              class="min-w-0 rounded-2xl border p-4 shadow-xl backdrop-blur sm:p-5 lg:rounded-3xl lg:p-6"
            >
              <h3 class="text-xl font-black sm:text-2xl">
                Theo dõi Ngô Khang
              </h3>
              <div class="mt-5 space-y-4 lg:mt-6 lg:space-y-5">
                <a
                  v-for="channel in socialChannels"
                  :key="channel.name"
                  class="flex min-w-0 items-center gap-3 transition hover:-translate-y-1 sm:gap-4"
                  :href="channel.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl"
                  >
                    <img
                      class="h-6 w-6 object-contain sm:h-8 sm:w-8"
                      :src="channel.icon"
                      :alt="`${channel.name} icon`"
                    />
                  </span>
                  <span class="min-w-0">
                    <span
                      :class="isLightMode ? 'text-slate-500' : 'text-slate-400'"
                      class="block text-sm font-semibold"
                    >
                      {{ channel.name }}
                    </span>
                    <span
                      class="mt-1 block truncate text-base font-bold sm:text-xl"
                    >
                      {{ channel.label }}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <form
            :class="
              isLightMode
                ? 'border-emerald-100 bg-white/80 text-slate-900 shadow-slate-900/10'
                : 'border-emerald-300/20 bg-slate-900/70 text-slate-50 shadow-emerald-950/30'
            "
            class="min-w-0 rounded-2xl border p-4 shadow-xl backdrop-blur sm:p-5 md:p-6 lg:rounded-3xl lg:p-8"
            @submit.prevent
          >
            <div class="grid gap-5 md:grid-cols-2">
              <label class="block">
                <span class="font-semibold">Tên của bạn</span>
                <input
                  :class="
                    isLightMode
                      ? 'bg-slate-100 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-800 text-slate-50 placeholder:text-slate-500'
                  "
                  class="mt-3 w-full rounded-xl border-0 px-4 py-3 text-base outline-none ring-1 ring-transparent transition focus:ring-[#42b883] sm:rounded-2xl sm:px-5 sm:py-4"
                  type="text"
                  placeholder="Nguyễn Văn A"
                />
              </label>

              <label class="block">
                <span class="font-semibold">Email hoặc số điện thoại</span>
                <input
                  :class="
                    isLightMode
                      ? 'bg-slate-100 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-800 text-slate-50 placeholder:text-slate-500'
                  "
                  class="mt-3 w-full rounded-xl border-0 px-4 py-3 text-base outline-none ring-1 ring-transparent transition focus:ring-[#42b883] sm:rounded-2xl sm:px-5 sm:py-4"
                  type="text"
                  placeholder="email@example.com hoặc 0901234567"
                />
              </label>

              <label class="block md:col-span-2">
                <span class="font-semibold">Tin nhắn</span>
                <textarea
                  :class="
                    isLightMode
                      ? 'bg-slate-100 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-800 text-slate-50 placeholder:text-slate-500'
                  "
                  class="mt-3 min-h-[140px] w-full resize-none rounded-xl border-0 px-4 py-3 text-base outline-none ring-1 ring-transparent transition focus:ring-[#42b883] sm:min-h-[160px] sm:rounded-2xl sm:px-5 sm:py-4 lg:min-h-[190px]"
                  placeholder="Chia sẻ lời nhắn, lịch diễn hoặc dự án hợp tác..."
                ></textarea>
              </label>
            </div>

            <button
              class="mt-6 w-full rounded-full bg-gradient-to-r from-[#35495e] to-[#42b883] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#42b883]/20 transition hover:-translate-y-1 hover:shadow-[#42b883]/30 sm:px-7 sm:py-4 lg:mt-7"
              type="submit"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Mail, Phone } from 'lucide-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactSection',
  components: {
    Mail,
    Phone,
  },
  data() {
    return {
      email: 'ngokhang@gmail.com',
      phoneNumber: '0901234567',
      phoneLabel: '090 123 4567',
      socialChannels: [
        {
          name: 'Facebook',
          label: 'facebook.com/ngokhang',
          href: '#',
          icon: '/facebook_logo.png',
        },
        {
          name: 'Tiktok',
          label: '@ngokhang',
          href: '#',
          icon: '/tiktok_logo.png',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['isLightMode']),
  },
}
</script>

<style scoped>
.overflow-wrap-anywhere {
  overflow-wrap: anywhere;
}
</style>
