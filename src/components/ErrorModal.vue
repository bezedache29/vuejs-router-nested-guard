<template>
  <dialog open>
    <p>Merci de remplir tous les champs</p>
    <button @click="closeModal">Ok !</button>
  </dialog>
</template>

<script>
export default {
  emits: [
    'triggerCloseModal'
  ],
  methods: {
    closeModal() {
      this.$emit('triggerCloseModal')
    }
  }
}
</script>

<style>

</style>