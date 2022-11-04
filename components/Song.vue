<template>
  <div
    class="flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
    <div
      class="h-14 bg-white hover:bg-brand hover:text-white transition-all gap-2 p-4 flex flex-row items-center">
      <span class="flex-grow font-bold text-xl">{{ title }}</span>
      <span class="">
				<button class="btn">☰</button>
			</span>
      <div class>
        <button class="btn">×</button>
      </div>
    </div>
    <div class="flex flex-col bg-white fit-content bg-white">
      <div class="fit-content overflow-y-auto flex-grow p-4 " style="max-height:calc(60vh - 56px)">
        <p>{{ id }}</p>
        <p v-for="theme in theme">{{ theme }}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Song',
    props: [
      "id",
      "title",
      "theme"
    ]
  }
</script>
