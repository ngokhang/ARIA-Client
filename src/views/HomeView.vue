<template>
  <main class="home max-w-2xl">
    <h1 class="text-3xl font-bold text-slate-950">{{ name }}</h1>
    <p class="mt-2 text-slate-600">Total students: {{ studentCount }}</p>

    <ul
      class="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white"
    >
      <li
        v-for="student in students"
        :key="student.name"
        class="px-4 py-3 text-slate-700"
      >
        {{ student.name }} - {{ student.age }} years old
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['name', 'students']),
    ...mapGetters(['studentCount']),
  },
  methods: {
    handleClickButton(message) {
      alert(`Message from child: ${message}`)
    },
  },
}
</script>
