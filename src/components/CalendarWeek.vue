<template>
  <div class="calendar-week">
    <calendar-day />
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
export default {
  components: { CalendarDay },
};
</script>

<style>
</style>