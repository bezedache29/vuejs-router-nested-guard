<template>
  <div>
    <router-link to="/">
      Show List
    </router-link>
    <router-link to="/add">
      Show Form
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  div {
    list-style-type: none;
    border: 1px rgb(204, 204, 204) solid;
    border-radius: 15px;
    margin-top: 10px;
    width: 50%;
    padding: 20px;
    display: flex;
  }
</style>