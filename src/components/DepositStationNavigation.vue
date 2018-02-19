<template>
    <Menu theme="dark" width="auto" :class="menuitemClasses" :active-name="active">
      <template v-for="(navigation, index) in navigations">
        <MenuItem :name="index" :key="index" @click="updateFilters(navigation)">
          <Icon
            :title="navigation.title"
            :key="index"
            :class="navigation.name"
            @click.native="updateFilters(index)"
          >
          <Poptip placement="left" width="400">
            <div class="api" slot="content">
              <Form :model="formItem" :label-width="80">
                <FormItem label="Input">
                  <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
              </Form>
            </div>
          </Poptip>
          </Icon>
        </MenuItem>
      </template>
    </Menu>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'deposit-station-navigation',
  data () {
    return {
      active: 0,
      formItem: {
        input: ''
      }
    }
  },
  computed: {
    navigations () {
      return store.getters.getNavigation
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted () {},
  methods: {
    updateFilters (payload) {
      let filter = this.navigations[payload].filter || false
      if (filter) {
        store.commit('updateFilter', filter.status)
        store.commit('updateGroup', false)
      } else {
        store.commit('updateGroup', true)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}

@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?pnn2i6');
  src:  url('../assets/fonts/icomoon.eot?pnn2i6#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?pnn2i6') format('truetype'),
    url('../assets/fonts/icomoon.woff?pnn2i6') format('woff'),
    url('../assets/fonts/icomoon.svg?pnn2i6#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="ivu-icon"], [class*=" ivu-icon"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.archive:before {
  content: "\e920";
}
.group:before {
  content: "\e972";
}
.sortation:before {
  content: "\ea48";
}
</style>