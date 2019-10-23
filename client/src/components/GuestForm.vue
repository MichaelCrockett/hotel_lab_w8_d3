<template lang="html">
  <form v-on:submit="saveNewGuest" id="guestsForm">
    <div class="guest-name-input">
      <label for="name">Guest Name: </label>
      <input v-model="name" type="text" id="name" required>
    </div>
    <div class="guest-email-input">
      <label for="email">Guest Email: </label>
      <input v-model="email" type="text" id="email" required>
    </div>
    <!-- <input type="hidden" v-model="isCheckedIn" value=false> -->
    <div class="guest-save-input">
      <input type="submit" value="save" id="save" class="guest-save-button">
    </div>
  </form>
</template>

<script>

import {eventBus} from '@/main.js';
import GuestService from '@/services/GuestService.js';

export default {
  name: "guests-form",
  data(){
    return {
      name: '',
      email: null,
      isCheckedIn: null
    }
  },
  methods: {
    saveNewGuest(e){
      e.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        isCheckedIn: false
      }
      GuestService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style>
.guest-save-button {
margin-left: 10px;
}
form {
display:flex;
justify-content: space-around;
}


div.guest-name-input{
  
}

div.guest-email-input{

}

div.guest-save-input{

}

</style>
