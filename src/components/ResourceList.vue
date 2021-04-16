<template>
  <ul>
    <resource-item
      v-for="(item, id) in list" :key="id"
      :title="item.title"
      :desc="item.desc"
      :link="item.link"
      :commentary="item.commentary"
      :id="id"
      @delete-item="triggerDelete"
    ></resource-item>
  </ul>
</template>

<script>
import axios from 'axios';

import ResourceItem from './ResourceItem.vue';

export default {
  components: { ResourceItem },
  mounted() {
    this.getData();
  },
  data() {
    return {
      list: {},
    }
  },
  methods: {
    async getData() {
      const url = 'https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources.json';
      const firebaseResponse = await axios.get(url);
      this.list = firebaseResponse.data;
    },
    async triggerDelete(id) {
      const url = `https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources`;
      try {
        const response = await axios.delete(`${url}/${id}.json`);

        if(response.statusText !== 'OK') {
          throw new Error("Une erreur est survenue !");
        }

        this.getData();
      } catch(error) {
        alert(error.message);
      }
    }
  }
}
</script>

<style scoped>

</style>