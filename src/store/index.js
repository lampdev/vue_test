// yarn add vuex vuex-router-sync
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: false,
  state: {
    depositStation: {
      navigation: [
        {
          id: 'AZ',
          name: 'sortation',
          url: 'patient-list',
          title: 'Patienten-Liste',
          group: false,
          filter: { status: 1 }
        },
        {
          id: 'group',
          name: 'group',
          url: 'patient-list',
          title: 'Patienten-Liste',
          group: true
        },
        {
          id: 'archive',
          name: 'archive',
          title: 'Liste der archivierten Patienten',
          group: false,
          filter: { status: 0 }
        }
      ],
      collections: [
        { id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1 },
        { id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1 },
        { id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1 },
        { id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1 },
        { id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1 },
        { id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 0 },
        { id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0 }
      ]
    },
    filter: {
      status: 1
    },
    group: false
  },
  getters: {
    getDepositStationData (state) {
      return state.depositStation || false
    },
    getCollections (state) {
      return state.depositStation.collections || false
    },
    getNavigation (state) {
      return state.depositStation.navigation || false
    },
    getFilter (state) {
      return state.filter.status
    },
    getGroup (state) {
      return state.group
    }
  },
  mutations: {
    updateDepositStationData (state, payload) {
      state.depositStation = payload
    },
    updateCollections (state, payload) {
      state.depositStation.collections = payload
    },
    updateNavigation (state, payload) {
      state.depositStation.navigation = payload
    },
    updateFilter (state, payload) {
      state.filter.status = payload
    },
    updateGroup (state, payload) {
      state.group = payload
    }
  },
  actions: {
    // ...
  }
})
