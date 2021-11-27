<template>
  <div class="home">
    <HeaderComp msg="Main page (Search All)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <IdSearchComp msg="Crap is operational but most likely broken"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import IdSearchComp from '@/components/IdSearchComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    IdSearchComp
  }
}
</script>
