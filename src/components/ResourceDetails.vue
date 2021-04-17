<template>
  
  <div class="details">
    <h1>Détails de la ressource : {{ resource.title }}</h1>
    <h3>Description :</h3>
    <p v-if="!isEdit">{{ resource.desc }}</p>
    <div v-else class="group">
      <textarea class="textarea" v-model.trim="desc" name="desc" cols="30" rows="10" @keyup.enter="changeDesc"></textarea>
    </div>
    <h3>Commentaire :</h3>
    <p v-if="!isEdit">{{ resource.commentary }}</p>
    <div v-else class="group">
      <textarea class="textarea" v-model.trim="commentary" name="desc" cols="30" rows="10" @keyup.enter="changeCommentary"></textarea>
    </div>
    <div class="buttons" v-if="!isEdit">
      <a target="_blank" :href="resource.link">{{ resource.link }}</a>
    </div>
    <div v-else class="group group-link">
      <h3>Link :</h3>
      <input class="input" v-model.trim="link" type="text" @keyup.enter="changeLink" />
    </div>
    <div class="btn">
      <button @click="edit" v-if="!isEdit">Edit</button>
      <button @click="change" v-else class="btn-change">Change</button>
    </div>
  </div>

</template>

<script>

import axios from 'axios'


export default {
  name: 'resource-details',

  props: {
    id: String
  },


  data() {
    return {
      resource: {},
      isEdit: false,
      desc: '',
      commentary: '',
      link: ''
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
      const url = `https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources`
      try {
        const response = await axios.get(`${url}/${id}.json`)
        this.resource = response.data
        this.desc = response.data.desc
        this.commentary = response.data.commentary
        this.link = response.data.link
        console.log(this.resource)

      } catch(error) {
        alert(error.message)
      }
    },

    edit() {
      this.isEdit = true
    },

    change() {
      this.isEdit = false
    }
    

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
    /* max-height: 600px; */
    height: 100%;
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
  .group {
    display: flex;
    justify-content: center;
  }
  .textarea {
    width: 95%;
  }
  .group-link {
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 20px;
  }
  .btn-change {
    margin: 0 20px 20px 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: blueviolet;
    border: none;
    color: white;
  }
  .btn-change:hover {
    background-color: red;
  }
</style>