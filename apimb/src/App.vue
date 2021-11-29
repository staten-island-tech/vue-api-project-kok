<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/IDSR">ID Search</router-link> |
      <router-link to="/IDSR2">ID Search 2.0</router-link> |
      <router-link to="/L984">1984</router-link>
    </div>
    <router-view/>
    <div class="AppFooter">
      <FooterComp/>
    </div>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'

export default {
  setup() {
    
  },
  name: 'app',
  components: {
    FooterComp
  },
  data () {
    return {
      painLevel: 1
    }
  },
  beforeMount () {
    if (this.painLevel === 1) {
      this.pain()
    }

  },
  methods: {
    pain () {
      alert("Don't worry about the white screen, once the alerts are read all will be ok.")
      alert("A quick run down of the routers:")
      alert("'Home' works, but is a mess of raw strings")
      alert("'IDSR' works, a very laggy mess of raw strings")
      alert("'IDSR2' is a last minute attempt to accomplish some catagories in the rubric. Its not functional")
      alert("'1984' is... ah... just there.")
    }
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
  background-image:url('https://media0.giphy.com/media/wvQIqJyNBOCjK/200.gif');
  background-repeat: repeat;
  min-height: 100rem;
}

#nav {
  padding: 1rem;
  background-color:slategray;
}

.AppFooter {
  bottom: 0;
  width:100%;
  position:fixed;
}

</style>
