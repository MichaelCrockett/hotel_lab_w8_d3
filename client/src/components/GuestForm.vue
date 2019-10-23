<template lang="html">
  <form v-on:submit="saveNewGuest" id="guestsForm">
    <label for="name">Guest Name: </label>
    <input v-model="name" type="text" id="name" required>
    <label for="email">Guest Email: </label>
    <input v-model="email" type="text" id="email" required>
    <!-- <input type="hidden" v-model="isCheckedIn" value=false> -->
    <input type="submit" value="save" id="save">
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

<style lang="css" scoped>
</style>
