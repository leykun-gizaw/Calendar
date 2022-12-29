<template>
  <div class="card is-radiusless" :style="getEventBackgroundColor">
    <div class="card-content is-radiusless" v-if="ev.edit === false">
      {{ ev.details }}
    </div>
    <input class="input" type="text" v-model="detail" v-if="ev.edit === true" />
    <footer class="card-footer is-borderless">
      <button
        name="Save"
        class="button is-success card-footer-item is-radiusless is-small"
        v-if="ev.edit"
        @click="saveEventDetail"
      >
        <font-awesome-icon icon="floppy-disk" />
      </button>
      <button
        name="Cancel"
        class="button is-danger card-footer-item is-radiusless is-small"
        v-if="ev.edit"
        @click="cancelEventEdit"
      >
        <font-awesome-icon icon="fa-close" />
      </button>
      <button
        name="Edit"
        class="button is-info card-footer-item is-radiusless is-small"
        v-if="!ev.edit"
        @click="editEventDetail"
      >
        <font-awesome-icon icon="fa-pen-to-square" />
      </button>
      <button
        name="Delete"
        class="button is-danger card-footer-item is-radiusless is-small"
        v-if="ev.edit === false"
      >
        <font-awesome-icon icon="fa-trash" />
      </button>
    </footer>
  </div>
  <div></div>
</template>

<script>
export default {
  props: ["ev"],
  data() {
    return {
      detail: this.ev.details,
    };
  },
  methods: {
    editEventDetail() {
      this.ev.edit = true;
    },
    saveEventDetail() {
      this.ev.edit = false;
      this.ev.details = this.detail;
    },
    cancelEventEdit() {
      this.ev.edit = false;
      this.detail = this.ev.details;
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ["#ff9999", "#85d6ff", "#99ff99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
}
.card .card-content {
  padding: 0.5rem;
}
button {
  border: none;
}
input {
  text-align: center;
}
</style>