<template>
  <div class="about">
    <HeaderComp msg="This was originally an about page. It was improved"/>
    <I984/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import I984 from '@/components/I984.vue'

export default {
  name: 'L984',
  components: {
    HeaderComp,
    I984
  }
}
</script>

