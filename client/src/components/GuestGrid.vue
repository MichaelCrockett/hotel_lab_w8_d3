<template lang="html">
  <div id="guestsGrid">
    <div id="guest" v-for="guest in guests">
      <h2>{{ guest.name }}</h2>
      <h3>{{ guest.email }}</h3>
      <button v-on:click="deleteBooking(guest._id)">Delete booking</button>
    </div>

  </div>

</template>

<script>

import GuestService from '../services/GuestService.js'
import { eventBus } from '../main.js';

export default {
  name: "guests-grid",
  props: ["guests"],

  methods: {
    deleteBooking(id) {
      GuestService.deleteBooking(id)
      .then(() => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>


<style lang="css" scoped>
</style>
