<template>
  <div class="home">
    <chart />
    <gauge/>
  </div>
</template>

<script>
import chart from '../components/chart'
import gauge from '../components/gauge'
export default {
  name: 'App',
  components: {
    chart,
    gauge
  }
}
</script>
