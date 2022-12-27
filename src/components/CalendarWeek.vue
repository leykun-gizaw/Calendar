<template>
  <div class="calendar-week">
    <div class="columns">
      <calendar-day v-for="day in [1, 2, 3, 4, 5, 6, 7]" :key="day" />
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
export default {
  components: { CalendarDay },
};
</script>

<style scoped>
.columns {
  border: 1px solid white;
}
</style>