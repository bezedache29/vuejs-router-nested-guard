<template>
  <button :disabled="inactive" :class="{inactive: inactive}" @click="tiggerClick">
    {{content}}
  </button>
</template>

<script>
export default {
  props: {
    content: String,
    inactive: Boolean
  },
  emits: ['buttonClicked'],
  methods: {
    tiggerClick() {
      this.$emit('buttonClicked');
    }
  }
}
</script>

<style scoped>
  button {
    border: 0px;
    padding: 20px;
    background-color: blueviolet;
    text-align: center;
    color: white;
    margin-right: 5px;
    cursor: pointer;
  }

  .inactive {
    background-color: white;
    color: blueviolet;
    cursor: initial;
  }
</style>