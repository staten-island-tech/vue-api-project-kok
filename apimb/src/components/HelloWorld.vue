<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  // mounted() {
  //   fetch("http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true", {
  //   method: "GET",
  //   headers: {
  //     Authorization: 'Authorization: Token token="abcdefghijklmn"'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(response => {
  //     console.log(response);
  //   });
  // }
}
</script>

http://api.steampowered.com/ISteamApps/GetAppList/v2

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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

