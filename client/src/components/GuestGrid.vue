<template lang="html">
  <div id="guestsGrid">
    <div id="guest" v-for="guest in guests">
      <h2>{{ guest.name }}</h2>
      <h3>{{ guest.email }}</h3>
    </div>

  </div>

</template>

<script>

import GuestService from '../services/GuestService.js'
import { eventBus } from '../main.js';

export default {
  name: "guests-grid",
  props: ["guests"]
}
</script>


<style lang="css" scoped>
</style>
