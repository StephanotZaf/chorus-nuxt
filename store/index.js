import Vuex from 'vuex'

const createdStore = () => {
  return new Vuex.Store(
    {
      state: {
        loadedSongs: []
      },
      mutations: {
        setSongs(state, songs) {
          state.loadedSongs = songs
        }
      },
      actions: {
        setSongs({ commit }, songs) {
          commit('setSongs', songs)
        }
      },
      getters: {
        loadedSongs(state) {
          return state.loadedSongs
        }
      }
    })
}

export default createdStore
