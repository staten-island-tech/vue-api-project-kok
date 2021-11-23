<template>
  <div class="home">
    <HeaderComp msg="Main page (Search All)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SearchComp msg="Crap is operational and most likely broken"/>
    <FooterComp msg="FooterComp read"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import SearchComp from '@/components/SearchComp.vue'
import FooterComp from '@/components/FooterComp.vue'
// import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    SearchComp,
    FooterComp
  }
}
</script>
