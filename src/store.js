import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    permissionsUserData:{
      dialogFormVisible: false

    }

  },
  mutations: {
    increment (state) {
      state.count++
    },
    showPermissionsUser (state){
      state.permissionsUserData.dialogFormVisible = true;

    },
    closePermissionsUser :state => state.permissionsUserData.dialogFormVisible = false ,
    updatePermissionsUser :(state,value) => state.permissionsUserData.dialogFormVisible = value ,


  },
  actions: {

  }
})
