<template>
  <div class="searchBody">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <div class=input>
      <input v-model="this.apiKey" placeholder="Input SteamAPP ID">
      <button @click="BYIDBTclicked()">Search </button>
    </div>
    <div class='output'>
      <p>{{this.searchResults}}</p>
    </div>
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
      apiKey:'',
      apiSearchtst:'',
      apiSearch: '',
      searchResults:'',
      afterSearch: '',
    }
  },
  methods: {
    BYIDBTclicked () {
      this.apiSearch = 'http://store.steampowered.com/api/appdetails?appids=' + this.apiKey
      fetch(this.apiSearch, {
      method: 'GET',
      headers: {
        // appids_key: this.apiKeyi
      }
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      this.searchResults = res
      console.log('checkinGnwefusbndfuenb');
      console.log(this.searchResults);
    }) 
    }
  },
  // mounted() {
  //   fetch(this.apiSearch, {
  //     method: 'GET',
  //     headers: {
  //       // appids_key: this.apiKeyi
  //     }
  //   })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(res => {
  //     console.log(res);
  //     this.searchResults = res
  //     console.log('checkinGnwefusbndfuenb');
  //     console.log(this.searchResults);
  //   }) 
  // }
}
</script>
<style >
.searchBody{
  background-color: lightskyblue;
  min-height:20rem;
  padding: 1rem;
  margin:2rem;
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