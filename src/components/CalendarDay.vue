<template>
  <div class="column">
    <div class="card is-radiusless is-shadowless">
      <header class="card-header is-shadowless">
        <p class="card-header-title">Component</p>
      </header>
      <div class="card-content is-radiusless"></div>
    </div>
    <calendar-event />
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
export default {
  components: { CalendarEvent },
};
</script>

<style scoped>
.column {
  padding: 0;
}
.card {
  min-width: 200px;
  border-left: 1px solid #666;
}
.card-content {
  background-color: #555;
}
.card-header-title {
  background-color: #444;
  color: white;
  justify-content: center;
}
</style>