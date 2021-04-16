<template>
  <header>
    {{headerText}}
  </header>
</template>

<script>
export default {
  props: ['headerText']
}
</script>

<style scoped>
  header {
    height: 90px;
    width: 100%;
    background-color: blueviolet;
    color: white;
    text-align: center;
    font-size: 30px;
  }
</style>