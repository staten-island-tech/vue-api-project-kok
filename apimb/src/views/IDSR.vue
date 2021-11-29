<template>
  <div class="home">
    <HeaderComp msg=" CheatSheet (Giant list of IDs. Good luck trying to find the correct one.)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <IDSearchComp msg="Hath merci on thyn PC"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import IDSearchComp from '@/components/IDSearchComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    IDSearchComp
  },
}
</script>
