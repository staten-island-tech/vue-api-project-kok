<template>
  <div class="home">
    <HeaderComp msg="Cheatsheet 2.0 (It no work)"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <IDSearchComp2 msg="Hath merci on thyn PC" v-for="IdResult in IdResults" :key="IdResult" :pokemon="IdResult"/>
    <!-- <p>{{IdResults}}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import IDSearchComp2 from '@/components/IDSearchComp2.vue'

export default {
  name: 'Home',
  components: {
    HeaderComp,
    IDSearchComp2
  },
  data () {
    return {
      IDSearch: 'http://api.steampowered.com/ISteamApps/GetAppList/v2',
      IdResults: []
    }
  },
  // beforeMount () {
  //   this.fetchIDList()
  // },
  created: function () {
    this.fetchIDList();
  },
  methods: {
    fetchIDList () {
      fetch(this.IDSearch, {
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
