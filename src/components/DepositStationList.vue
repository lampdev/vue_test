<template>
  <Row>
    <br>
    <ul id="v-for-object" class="demo" v-if="!group">
      <li v-for="сollection in labels" v-if="filter === 0">
        <Card :bordered="false" >
          <p>{{сollection.label}}</p>
        </Card>
        <br>
      </li>
      <li v-for="сollection in filteredLabels" v-else="filter !== 0">
        <Card :bordered="false" >
          <p>{{сollection.label}}</p>
        </Card>
        <br>
      </li>
    </ul>
    <ul id="v-for-object" class="demo" v-else>
      <li v-for="group in groups">
        <Card :bordered="false" >
          <p>"{{group}}" - in this group: {{getCount(group)}} items </p>
        </Card>
        <br>
      </li>
    </ul>
  </Row>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'deposit-station-list',
  data() {
    return {
      groups: [],
      labels: [],
      fLabels: []
    }
  },
  computed: {
    сollections () {
      return store.getters.getCollections.sort(this.compare)
    },
    group () {
      return store.getters.getGroup
    },
    // labels () {
    //   return store.getters.getLabels
    // },
    filteredLabels () {
      return store.getters.getFilteredLabels
    },
    filter () {
      return store.getters.getFilter
    }
  },
  mounted() {
    this.getGroups()
    // this.setFilter()
    // store.subscribe('mutation', (mutation, state) => {
    //   console.log(mutation)
    // })
  },
  methods: {
    compare (firstValue, secondValue) {
      if (firstValue.label < secondValue.label)
        return -1;
      if (firstValue.label > secondValue.label)
        return 1;
      return 0;
    },
    getCount (nameKey) {
      let myArray = this.сollections
      let count = 0;
      for (var i=0; i < myArray.length; i++) {
        if (myArray[i].group === nameKey) {
          count++
        }
      }

      return count;
    },
    getGroups () {
      var array =  store.getters.getCollections
      var groups = array.map(item => item.group)
        .filter((value, index, self) => self.indexOf(value) === index)

      this.groups = groups
    },
    setfilter () {
      this.filter = store.getters.getFilter
    },
    getFilteredLabels () {
      var array = this.сollections

      var result = []
      for (let key in array) {
        if (array[key].status === 1) {
          result.push(array[key])
        }
      }

      console.log(result)
      this.fLabel = result
    },
    getLabels () {
      var array = this.сollections
      console.log(array, status)
      var result = []
      for (let key in array) {
        if (array[key].status === 0) {
          result.push(array[key])
        }
      }

      console.log(result)
      this.label = result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>