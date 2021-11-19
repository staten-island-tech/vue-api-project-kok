<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">1984</router-link>
    </div>
    <router-view/>
    <div class="AppFooter">
      <!-- <FooterComp/> -->
    </div>
  </div>
</template>

<script>
// import FooterComp from '@/components/FooterComp.vue'

export default {
  setup() {
    
  },
  name: 'app',
  components: {
    // FooterComp
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}

#nav {
  padding: 30px;

  
}

.AppFooter {
  bottom: 0;
  position:sticky;
}

</style>
