<template>
  <div class="headerDiv">
    <h2>..... API Searcher</h2>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.headerDiv {
  background-color:blue;
  top: 0;
  position: relative;
}

h3 {
  margin: 40px 0 0;
}
h2 {
    text-decoration: underline;
    font-size: 10mm;
    color: white;
    text-decoration-color: white;
}
h1 {
    font-size: 7mm;
    color: white;
    text-decoration-color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
