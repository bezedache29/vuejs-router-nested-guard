<template>
  <div class="container">
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
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

import ResourceItem from './ResourceItem.vue'

export default {
  components: { ResourceItem },
  mounted() {
    this.getData()
  },
  data() {
    return {
      list: {},
    }
  },
  watch: {
    list() {
      this.getData()
    }
  },
  methods: {
    async getData() {
      const url = 'https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources.json';
      const firebaseResponse = await axios.get(url)
      this.list = firebaseResponse.data
    },
    async triggerDelete(id) {
      const url = `https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources`;
      try {
        const response = await axios.delete(`${url}/${id}.json`)

        if(response.statusText !== 'OK') {
          throw new Error("Une erreur est survenue !")
        }

        // this.getData()

        // On redirect vers la list
        this.$router.push({ name: 'list' })

      } catch(error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    margin-bottom: 20px;
  }
  ul {
    width: 45%;
    margin: 0 2%;
    padding: 0;
    margin-right: 2.5%;
  }
</style>