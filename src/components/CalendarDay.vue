<template>
  <div class="column">
    <div class="card is-radiusless is-shadowless">
      <header class="card-header is-shadowless">
        <p class="card-header-title">Component</p>
      </header>
      <div class="card-content"></div>
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
  border-left: 1px solid #ddd;
}
.card-header-title {
  background-color: #555;
  color: white;
  justify-content: center;
}
</style>