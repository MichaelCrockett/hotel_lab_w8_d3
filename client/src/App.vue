<template lang="html">
  <div class="">
    <h1>Check-in System</h1>
    <guests-form />
    <guests-grid :guests="guests" />
  </div>
</template>

<script>


import GuestGrid from './components/GuestGrid';
import GuestForm from './components/GuestForm';
import GuestService from './services/GuestService';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data () {
    return {
      guests:[]
    }
  },

  components: {
    'guests-grid': GuestGrid,
    'guests-form': GuestForm
  },

  mounted() {
    this.fetchData();

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })
  },

  methods: {
    fetchData(){
      GuestService.getGuests()
      .then(guests => this.guests = guests);
    }
  }
}
</script>





<style lang="css" scoped>
</style>
