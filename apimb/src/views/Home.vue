<template>
  <div class="home">
    <HeaderComp msg="Main page (Search All)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SearchComp msg="Crap is operational but most likely broken"/>
    <p>{{this.searchResults}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import SearchComp from '@/components/SearchComp.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    SearchComp
  }
}
</script>
