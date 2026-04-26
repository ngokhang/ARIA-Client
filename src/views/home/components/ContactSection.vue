<template>
  <section
    id="contact"
    class="contact-section relative z-10 mt-24 w-full max-w-full pb-16"
  >
    <div
      :class="
        isLightMode
          ? 'border-white/70 bg-white/80 shadow-slate-900/10'
          : 'border-emerald-300/20 bg-slate-800/80 shadow-emerald-950/30'
      "
      class="relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur md:p-10"
    >
      <div
        class="absolute right-0 top-0 h-72 w-72 -translate-y-24 translate-x-24 rounded-full bg-[#42b883]/20 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 h-72 w-72 -translate-x-24 translate-y-24 rounded-full bg-teal-300/20 blur-3xl"
      ></div>

      <div class="relative">
        <div class="mx-auto mb-14 max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500"
          >
            Liên hệ
          </p>
          <h2
            :class="isLightMode ? 'text-slate-950' : 'text-slate-50'"
            class="mt-3 text-3xl font-black tracking-tight md:text-4xl"
          >
            Kết nối với Ngô Khang
          </h2>
          <p
            :class="isLightMode ? 'text-slate-600' : 'text-slate-300'"
            class="mt-4 leading-7"
          >
            Theo dõi các kênh chính thức hoặc liên hệ trực tiếp để đặt lịch biểu
            diễn, hợp tác truyền thông và các dự án âm nhạc.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div class="space-y-6">
            <div
              :class="
                isLightMode
                  ? 'border-emerald-100 bg-white/80 text-slate-900 shadow-slate-900/10'
                  : 'border-emerald-300/20 bg-slate-900/70 text-slate-50 shadow-emerald-950/30'
              "
              class="rounded-3xl border p-6 shadow-xl backdrop-blur"
            >
              <h3 class="text-2xl font-black">Liên hệ trực tiếp</h3>
              <a
                class="mt-6 flex items-center gap-4"
                :href="`tel:${phoneNumber}`"
              >
                <span
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#42b883]/10 text-[#42b883] shadow-lg"
                >
                  <Phone class="h-7 w-7" aria-hidden="true" />
                </span>
                <span>
                  <span
                    :class="isLightMode ? 'text-slate-500' : 'text-slate-400'"
                    class="block text-sm font-semibold"
                  >
                    Điện thoại cá nhân
                  </span>
                  <span class="mt-1 block text-xl font-bold">
                    {{ phoneLabel }}
                  </span>
                </span>
              </a>
              <a class="mt-6 flex items-center gap-4" :href="`mailto:${email}`">
                <span
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#42b883]/10 text-[#42b883] shadow-lg"
                >
                  <Mail class="h-7 w-7" aria-hidden="true" />
                </span>
                <span>
                  <span
                    :class="isLightMode ? 'text-slate-500' : 'text-slate-400'"
                    class="block text-sm font-semibold"
                  >
                    Email
                  </span>
                  <span class="mt-1 block text-xl font-bold">
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
              class="rounded-3xl border p-6 shadow-xl backdrop-blur"
            >
              <h3 class="text-2xl font-black">Theo dõi Ngô Khang</h3>
              <div class="mt-6 space-y-5">
                <a
                  v-for="channel in socialChannels"
                  :key="channel.name"
                  class="flex items-center gap-4 transition hover:-translate-y-1"
                  :href="channel.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg"
                  >
                    <img
                      class="h-8 w-8 object-contain"
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
                    <span class="mt-1 block truncate text-xl font-bold">
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
            class="rounded-3xl border p-6 shadow-xl backdrop-blur md:p-8"
            @submit.prevent
          >
            <div class="space-y-5">
              <label class="block">
                <span class="font-semibold">Tên của bạn</span>
                <input
                  :class="
                    isLightMode
                      ? 'bg-slate-100 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-800 text-slate-50 placeholder:text-slate-500'
                  "
                  class="mt-3 w-full rounded-2xl border-0 px-5 py-4 outline-none ring-1 ring-transparent transition focus:ring-[#42b883]"
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
                  class="mt-3 w-full rounded-2xl border-0 px-5 py-4 outline-none ring-1 ring-transparent transition focus:ring-[#42b883]"
                  type="text"
                  placeholder="email@example.com hoặc 0901234567"
                />
              </label>

              <label class="block">
                <span class="font-semibold">Tin nhắn</span>
                <textarea
                  :class="
                    isLightMode
                      ? 'bg-slate-100 text-slate-900 placeholder:text-slate-400'
                      : 'bg-slate-800 text-slate-50 placeholder:text-slate-500'
                  "
                  class="mt-3 min-h-[160px] w-full resize-none rounded-2xl border-0 px-5 py-4 outline-none ring-1 ring-transparent transition focus:ring-[#42b883]"
                  placeholder="Chia sẻ lời nhắn, lịch diễn hoặc dự án hợp tác..."
                ></textarea>
              </label>
            </div>

            <button
              class="mt-7 w-full rounded-full bg-gradient-to-r from-[#35495e] to-[#42b883] px-7 py-4 font-bold text-white shadow-lg shadow-[#42b883]/20 transition hover:-translate-y-1 hover:shadow-[#42b883]/30"
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
