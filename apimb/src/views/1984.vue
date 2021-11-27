<template>
  <div class="about">
    <HeaderComp msg="This was originally an about page"/>
    <img alt="1984 meme" src="../assets/1984LG.png">
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: '1984',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

