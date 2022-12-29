<template>
  <div class="calendar-week">
    <div class="columns is-desktop">
      <calendar-day v-for="day in sharedState" :key="day" :day="day" />
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import { store } from "../store.js";
export default {
  components: { CalendarDay },
  data() {
    return {
      sharedState: store.state.data,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>