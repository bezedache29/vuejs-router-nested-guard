<template>
  <div>
    <router-link :to="routeList" class="btn">
      Show List
    </router-link>
    <router-link :to="routeForm" class="btn">
      Show Form
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    routeList() {
      return { name: 'list' }
    },
    routeForm() {
      return { name: 'form' }
    }
  }
}
</script>

<style scoped>
  div {
    list-style-type: none;
    border: 1px rgb(204, 204, 204) solid;
    border-radius: 15px;
    width: 50%;
    padding: 20px;
    display: flex;
    margin: 10px auto 0 auto;
  }
  .btn {
    padding: 10px 20px;
    margin: 0 10px;
    color: black;
    text-decoration: none;
  }
  .btn:hover {
    background-color: red;
    color: white;
  }
</style>