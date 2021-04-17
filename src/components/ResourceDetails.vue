<template>
  <div class="content">
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
    <div class="details">
      <h1>Détails de la ressource : {{ resource.title }}</h1>
      <h3>Description :</h3>
      <p>{{ resource.desc }}</p>
      <h3>Commentaire :</h3>
      <p>{{ resource.commentary }}</p>
      <div class="buttons">
          <a target="_blank" :href="resource.link">{{ resource.link }}</a>
        </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

import ResourceItem from './ResourceItem.vue';

export default {
  name: 'resource-details',

  components: {
    ResourceItem
  },

  data() {
    return {
      resource: {},
      list: {}
    }
  },

  mounted() {
    // console.log(this.$route)
    this.getData();
  },

  watch: {
    $route() {
      this.getCommentary(this.$route.params.id)
    }
  },

  methods: {
    async getCommentary(id) {
      const url = `https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources`;
      try {
        const response = await axios.get(`${url}/${id}.json`);
        this.resource = response.data
        console.log(this.resource)

      } catch(error) {
        alert(error.message);
      }
    },

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
    },

  }
}
</script>

<style scoped>
  .content {
    display: flex;
  }
  .details {
    width: 45%;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    border: 1px rgb(204, 204, 204) solid;
    border-radius: 15px;
    margin-top: 10px;
    margin-left: 2.5%;
  }
  h1 {
    text-align: center;
  }
  .buttons {
    display: flex;
    padding: 20px;
    align-items: center;
  }
  .buttons a {
    margin-right: 20px;
  }
  .buttons button {
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  p, h3 {
    padding-left: 20px;
  }
  ul {
    width: 45%;
    margin: 0 auto;
    padding: 0;
    margin-right: 2.5%;
  }
</style>