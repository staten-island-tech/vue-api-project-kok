<template>
  <div class="home">
    <HeaderComp msg="Main page (Search All)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooterComp msg="FooterComp read"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import FooterComp from '@/components/FooterComp.vue'
// import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    HelloWorld,
    FooterComp
  }
}
</script>
