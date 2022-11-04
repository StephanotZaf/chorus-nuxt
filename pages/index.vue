<template>
  <div>
    <Song v-for="song in songs" v-bind:id="song.id" v-bind:title="song.title" v-bind:theme="song.theme" v-bind:key="song.id"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      songs: this.$store.state.loadedSongs
    }
  },
  async mounted(){
    let result = await this.$axios.$get('/songs')
    this.$store.dispatch('setSongs', await result)
  },
})
</script>
