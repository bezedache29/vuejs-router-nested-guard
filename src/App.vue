<template>
  <custom-header headerText="My resource app"></custom-header>
  <tab-managment></tab-managment>
  <router-view></router-view>
</template>

<script>
import TabManagment from './components/TabManagment.vue';
import CustomHeader from './components/UI/CustomHeader.vue';

export default {
  name: 'App',
  components: {
    CustomHeader,
    TabManagment,
  },
  data() {
    return {
      showList: true,
    };
  },
  methods: {
    toggleComponent(buttonTriggered) {
      this.showList = buttonTriggered === "show-list";
    },
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .router-link-active {
    color: red;
  }
</style>
