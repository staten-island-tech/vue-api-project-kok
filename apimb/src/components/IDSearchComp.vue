<template>
  <div class="IDsearchBody">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <div class=input>
      <button @click="BYIDBTclicked()">Search </button>
    </div>
    <div class='output'>
      <p>{{this.afterSearch}}</p>
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
      searchResults:'',
      afterSearch: '34',
    }
  },
  methods: {
    BYIDBTclicked () {
      fetch('http://api.steampowered.com/ISteamApps/GetAppList/v2', {
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
    }) 
    }
  },
}
</script>
<style >
.IDsearchBody{
  background-color: gray;
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