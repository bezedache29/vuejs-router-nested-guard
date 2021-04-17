<template>
    <li>
        <h2><router-link :to="`/details/${id}`" class="title-link">{{title}}</router-link></h2>
        <p>{{desc}}</p>
        <div class="buttons">
          <a target="_blank" :href="link">View Link</a>
          <button @click="triggerDelete">Delete</button>
        </div>
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  h2 {
    margin: 0;
    background-color: rgb(207, 204, 204);
    padding: 20px;
  }
  .title-link {
    text-decoration: none;
    color: blueviolet;
  }
  .title-link:hover {
    color: red;
    text-decoration: underline;
  }
  p{
    padding-left: 20px;
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
</style>