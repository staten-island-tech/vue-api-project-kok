<template>
  <div class="searchBody">
    <h1>{{ msg }}</h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'SearchComp',
  props: {
    msg: String
  },
  data () {
    return {
      apiKey: 10,
      apiSearch: 'http://store.steampowered.com/api/appdetails?appids=' + this.apiKey
    }
  },
  mounted() {
    fetch(this.apiSearch, {
      method: 'GET',
      headers: {
        // appids_key: this.apiKey
      }
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
    }) 
  }
}
</script>
<style >
.searchBody{
  background-color: lightskyblue;
}
h3 {
  margin: 40px 0 0;
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

