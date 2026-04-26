<template>
  <div>
    <HeroSection />
    <AchievementsSection />
    <FeaturedSection />
    <ContactSection />
  </div>
</template>

<script>
import AchievementsSection from './components/AchievementsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FeaturedSection from './components/FeaturedSection.vue'
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    AchievementsSection,
    ContactSection,
    FeaturedSection,
    HeroSection,
  },
}
</script>
