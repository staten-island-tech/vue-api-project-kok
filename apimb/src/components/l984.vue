<template>
  <div class="meme">
    <h1>{{ msg }}</h1>
    <div class=note>
      <p>I dont play League. Im a HOI4 gamer</p>
    </div>
    <div class="picMeme">
      <img alt="1984 meme" src="../assets/1984LG.png">      
    </div>
    <div class=testInput>
      <button @click="testClicked()">MakeCrapHappen </button>
      <p>{{this.testvar1}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'l984',
  props: {
    msg: String
  },
  data () {
    return {
      testvar1: 10,
      testvar2: '50',
      testcar3: ''
    }
  },
  methods: {
    testClicked () {
      this.testvar1 = this.testvar1 -3
      if (this.testvar1 <0){
        this.testvar1 = 30
        alert("shit happened")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.testInput {
  background-color: gray;
}
.meme{
  display: flex;
  flex-direction: column; 
}
.note {
  display: flex;
  background-color: darkgray;
  text-decoration: underline;
  width:50%;
}
.picMeme {
  display: flex;
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