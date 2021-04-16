<template>
  <div>
    <p>Commentary de la resource : {{ resource.title }}</p>
    <p>{{ resource.commentary }}</p>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'resource-details',

  data() {
    return {
      resource: {}
    }
  },

  mounted() {
    // console.log(this.$route)

    this.getCommentary(this.$route.params.id)
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
    }
  }
}
</script>

<style>

</style>