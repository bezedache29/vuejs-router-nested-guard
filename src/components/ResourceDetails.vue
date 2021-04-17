<template>
  
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

</template>

<script>

import axios from 'axios';


export default {
  name: 'resource-details',

  props: {
    id: String
  },


  data() {
    return {
      resource: {},
    }
  },

  mounted() {
    // console.log(this.$route)
    this.getCommentary(this.$route.params.id)
  },

  watch: {
    id() {
      // this.getCommentary(this.$route.params.id)
      this.getCommentary(this.id)
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

    

  }
}
</script>

<style scoped>
  .details {
    width: 45%;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    border: 1px rgb(204, 204, 204) solid;
    border-radius: 15px;
    margin-top: 10px;
    margin-left: 2.5%;
    max-height: 600px;
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
  
</style>