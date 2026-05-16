import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Ngo Phu Khang',
    lightMode: true,
    students: [
      { name: 'Nguyen Van A', age: 20 },
      { name: 'Le Thi B', age: 22 },
      { name: 'Tran Van C', age: 21 },
    ],
    navItems: [
      { label: 'Trang chủ', to: '/' },
      { label: 'Giới thiệu', to: '/#achievements' },
      { label: 'Hình ảnh', to: '/hinh-anh' },
      {
        label: 'Liên hệ',
        to: JSON.stringify({ name: 'home', hash: '#contact' }),
      },
    ],
    sidebarItems: [
      { label: 'Trang chủ', to: JSON.stringify({ name: 'home' }) },
      { label: 'Giới thiệu', to: '/#achievements' },
      { label: 'Hình ảnh', to: '/hinh-anh' },
      {
        label: 'Liên hệ',
        to: JSON.stringify({ name: 'home', hash: '#contact' }),
      },
    ],
  },
  getters: {
    studentCount: (state) => state.students.length,
    isLightMode: (state) => state.lightMode,
    navItems: (state) => state.navItems,
    sidebarItems: (state) => state.sidebarItems,
  },
  mutations: {
    addStudent(state, student) {
      state.students.push(student)
    },
    toggleLightMode(state) {
      state.lightMode = !state.lightMode
    },
  },
  actions: {
    addStudent({ commit }, student) {
      commit('addStudent', student)
    },
    toggleLightMode({ commit }) {
      commit('toggleLightMode')
    },
  },
})
