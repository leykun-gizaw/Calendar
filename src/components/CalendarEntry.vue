<template>
  <div class="card">
    <div class="card-content">
      <input
        class="is-radiusless is-borderless"
        type="text"
        name=""
        id=""
        v-model="newEvent"
        placeholder="New Event"
      />
      <p v-if="error" style="color: red; font-size: 12px; margin-top: 10px">
        Please input details to submit
      </p>
      <div class="content has-text-primary">
        Day of event:
        <strong class="has-text-primary"
          ><em>{{ titleOfActiveDay }}</em></strong
        >
      </div>
      <footer>
        <button class="button is-primary is-outlined" @click="submitNewEvent()">
          Submit
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      newEvent: "",
      error: false,
    };
  },
  methods: {
    submitNewEvent() {
      if (this.newEvent === "") {
        this.error = true;
      } else {
        this.error = false;
        store.submitEvent(this.newEvent);
        this.newEvent = "";
      }
    },
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 25%;
  margin: 50px auto;
}
.card input {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  width: 100%;
}
.card input::placeholder {
  font-size: 1.75rem;
  color: #ccc;
}
.card .content {
  text-align: left;
  margin: 20px 0;
}
footer {
  text-align: left;
}
</style>