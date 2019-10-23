<template lang="html">
  <div id="guestsGrid">
    <div id="guest" v-for="guest in guests">
      <div id="guest-name">
        <h2>{{ guest.name }}</h2>
      </div>
      <div class="guest-email">
        <h3>{{ guest.email }}</h3>
      </div>
<div>
  <h4>Checked in? {{ guest.isCheckedIn }}</h4>
</div>
      <div class="guest-delete-button">
        <button v-on:click="deleteBooking(guest._id)">Delete booking</button>
      </div>
      </span>
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
