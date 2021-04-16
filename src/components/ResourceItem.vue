<template>
    <li>
        <h2><router-link :to="`/details/${id}`">{{title}}</router-link></h2>
        <p>{{desc}}</p>
        <a target="_blank" :href="link">View Link</a>
        <button @click="triggerDelete">Delete</button>
    </li>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    link: String,
    id: String,
    commentary: String,
  },
  emits: ['deleteItem'],
  methods: {
    triggerDelete() {
      this.$emit('deleteItem', this.id);
    }
  },
}
</script>

<style scoped>
  li {
    list-style-type: none;
    border: 1px rgb(204, 204, 204) solid;
    border-radius: 15px;
    margin-top: 10px;
    width: 50%;
    padding: 20px;
  }
</style>