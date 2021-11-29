<template>
  <div class="IDsearchBody">
    <h1>{{ msg }}</h1>
    <div class='death'>
      <button @click="fetchIDList()">Fetch ID list</button>
      <p id="WrnP">Warning! This will fetch the entire API, which may cause low memory browsers (such as Opera) to die.</p>
      <p>Assuming that it will actually work & isnt broken, lol</p>
    </div>
    <div>
      <p>{{this.IdResults}}</p>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'IDSearchComp',
  props: {
    msg: String
  },
  data () {
    return {
      apiSearch: 'http://api.steampowered.com/ISteamApps/GetAppList/v2',
      IdResults: ' '
    }
  },
  // beforeMount () {
  //   this.fetchIDList()
  // },
  methods: {
    fetchIDList () {
      fetch(this.apiSearch, {
        method: 'GET',
      })
      .then(res => {
      return res.json();
      })
      .then(res => {
        console.log(res);
        this.IdResults = res
        console.log('checkinjyjy');
        console.log(this.IdResults);
      })
    }
  }
}
</script>
<style >
.IDsearchBody{
  background-color: gray;
  min-height:20rem;
  padding: 1rem;
  margin:2rem;
}
#WrnP {
  text-decoration: underline;
  background-color: red;
  font-weight: bold;
  color: black;

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

