<template>
  <div class="column">
    <div class="card is-radiusless is-shadowless">
      <header class="card-header is-shadowless" @click="setActive(day.id)">
        <p class="card-header-title">{{ day.abbvTitle.toUpperCase() }}</p>
      </header>
      <p class="day_number">{{ day.id }}</p>
      <div class="card-content is-radiusless">
        <calendar-event v-for="event in day.events" :key="event" :ev="event" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import CalendarEvent from "./CalendarEvent.vue";
export default {
  components: { CalendarEvent },
  props: ["day"],
  methods: {
    setActive(id) {
      store.setActiveDay(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  padding: 0;
  width: 10rem;
}
.card {
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
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
}
.card-header-title {
  background-color: #444;
  color: white;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.card-header-title:hover {
  background-color: #4a4a4a;
}
.card-header-title:active {
  background-color: #444;
}
</style>