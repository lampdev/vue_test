<template>
  <div class="layout">
    <Layout>
      <!-- list -->
      <Layout>
        <deposit-station-list></deposit-station-list>        
      </Layout>
      <!-- navigation -->
      <Sider breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <deposit-station-navigation></deposit-station-navigation>   
        <!-- <div slot="trigger"></div> -->
      </Sider>
    </Layout>
  </div>
</template>

<script>
import store from '@/store'
import DepositStationList from '@/components/DepositStationList'
import DepositStationNavigation from '@/components/DepositStationNavigation'

export default {
  store,
  components: {
    DepositStationList,
    DepositStationNavigation
  },
  name: 'deposit-station',
  data () {
    return {
      isCollapsed: true      
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.layout{
  /* border: 1px solid #d7dde4; */
  background: #f5f7f9;
  position: relative;
  /* border-radius: 4px; */
  overflow: hidden;
}
</style>
