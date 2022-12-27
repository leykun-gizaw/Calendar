<template>
  <div class="column">
    <div class="card is-radiusless is-shadowless">
      <header class="card-header is-shadowless">
        <p class="card-header-title">{{ day.abbvTitle.toUpperCase() }}</p>
      </header>
      <p class="day_number">{{ day.id }}</p>
      <div class="card-content is-radiusless">
        <calendar-event
          v-for="event in day.events"
          :key="event"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
export default {
  components: { CalendarEvent },
  props: ["day"],
};
</script>

<style lang="scss" scoped>
.column {
  padding: 0;
}
.card {
  min-width: 200px;
  border-left: 1px solid #666;
}
.card .day_number {
  background-color: #555;
  color: white;
  text-align: left;
  padding: 0 0 0 15px;
  margin: 0;
}
.card-content {
  background-color: #555;
  display: grid;
  gap: 25px;
}
.card-header-title {
  background-color: #444;
  color: white;
  justify-content: center;
}
</style>