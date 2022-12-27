<template>
  <calendar-week />
  <calendar-entry />
</template>

<script>
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarWeek from "./components/CalendarWeek.vue";
export default {
  components: { CalendarWeek, CalendarEntry },
};
</script>

<style scoped>
</style>
