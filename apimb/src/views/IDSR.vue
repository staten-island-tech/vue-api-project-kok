<template>
  <div class="home">
    <HeaderComp msg="Main page (Search All)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <IDSearchComp msg="delted entire compnent beofre, hope it got restored?"/>
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
  }
}
</script>
