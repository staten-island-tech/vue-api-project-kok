<template>
  <div class="footerDiv">
      <div class="otherCrap">
        <h6>Other crap I made</h6>
        <ul>
            <li><a href="https://vigorous-knuth-582102.netlify.app/" target="_blank" rel="noopener">Pen over Distance Calc</a></li>
            <li><a href="https://pedantic-borg-565c2c.netlify.app/" target="_blank" rel="noopener">Chernobyl tour</a></li>
            <li><a href="https://eloquent-liskov-151bb7.netlify.app/" target="_blank" rel="noopener">Coffee to Caffeine Calc</a></li>
            <li><a href="https://the-mission-the-nightmares-theyre-finally-over.netlify.app/" target="_blank" rel="noopener">Dark Souls Quiz</a></li>
            <li><a href="https://condescending-blackwell-3a5033.netlify.app/" target="_blank" rel="noopener">Dark Souls API</a></li>
        </ul>  
      </div>

  </div>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.footerDiv {
  background-color: black;
  min-height:7rem;
  padding:.5rem;
}

.otherCrap {
  margin: .25rem;
  padding: .25rem;
}

h6{
  margin: 10px 0 0;
  text-decoration: underline;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: .5rem;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
