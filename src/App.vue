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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
