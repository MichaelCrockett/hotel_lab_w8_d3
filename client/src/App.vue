<template lang="html">
  <div class="main-container">
    <h1>CRT Hotel Check-in System</h1>
<h4>Hotel of The Year winner 1983, 1984 and 1986</h4>
    <div class="guest-form-div">
      <guests-form id="guest-form"/>
    </div>
    <div class="guest-grid-div">
      <guests-grid id="guest-listing" :guests="guests" />
    </div>
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
    });

    eventBus.$on('booking-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
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





<style>

div {
  background-color: #252525;
}
div.main-container {
  padding: 10px;
  font-family: Courier;
  background-color: #252525;
  color: limeGreen;
justify-content: center;
display: flex;
flex-direction: column;
}

div.guest-form-div {
  padding: 10px;
  border: 3px limeGreen dashed;
  justify-content: center;
display: flex;
flex-direction: column;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 0.8em;
}
div#guest {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

div.guest-name, .guest-email,  {
  display: flex;
  width: 40%;
}

div.guest-delete-button {
  margin-left: 10px;
  width: 20%;
}
.guest-grid-div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.guest-listing {
  display: inline-flex;
}
</style>
