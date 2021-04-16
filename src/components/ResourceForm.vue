<template>
  <div>
    <form @submit.prevent>
      <label>Title</label>
      <input class="input" v-model.trim="title" type="text" name="title" @blur="checkTitle" />
      <div v-if="titleError" class="error">Le titre doit être rempli</div>
      <label>Description</label>
      <textarea class="input" v-model.trim="desc" name="desc" cols="30" rows="10" @blur="checkDesc"></textarea>
      <div v-if="descError" class="error">La description doit être remplie</div>
      <label>Commentary</label>
      <textarea class="input" v-model.trim="commentary" name="desc" cols="30" rows="10" @blur="checkCommentary"></textarea>
      <div v-if="commentaryError" class="error">La commentary doit être remplie</div>
      <label>Link</label>
      <input class="input" v-model.trim="link" type="text" @blur="checkLink"/>
      <div v-if="linkError" class="error">Link est obligatoire</div>
      <div class="button">
        <custom-button :inactive="hasError" content="Submit" @buttonClicked="submitForm"></custom-button>
      </div>
    </form>
    <error-modal @trigger-close-modal="closeModal" v-if="showModal"></error-modal>
  </div>
</template>

<script>
import axios from 'axios';

import ErrorModal from './ErrorModal.vue';
import CustomButton from './UI/CustomButton.vue';

export default {
  components: { CustomButton, ErrorModal },
  data() {
    return {
      title: '',
      desc: '',
      link: '',
      commentary: '',
      showModal: false,
      titleError: false,
      descError: false,
      commentaryError: false,
      linkError: false,
    }
  },
  computed: {
    hasError () {
      return this.title === '' || this.desc === '' || this.link === '' || this.commentary === '';
    }
  },
  methods: {
    async submitForm() {
      // Check des valeurs 
      if(this.hasError) {
        this.showModal = true;
      } else {
        const url = 'https://resources-vuejs-default-rtdb.europe-west1.firebasedatabase.app/resources.json';
        const item = { title: this.title, desc: this.desc, link: this.link, commentary: this.commentary };
        
        try{
          const response = await axios.post(url, item);
          if(response.statusText === 'OK') {
            this.$router.push('/');
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    closeModal() {
      this.showModal = false;
    },
    checkTitle() {
      this.titleError = this.title === '';
    },
    checkDesc() {
      this.descError = this.desc === '';
    },
    checkLink() {
      this.linkError = this.link === '';
    },
    checkCommentary() {
      this.commentaryError = this.commentary === '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    padding: 10px 200px;
  }
  .input {
    margin-bottom: 20px;
  }
  .error {
    color: red;
    margin-top: -20px;
  }
  .button {
    margin-top: 20px;
  }
</style>