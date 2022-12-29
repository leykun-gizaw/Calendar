<template>
  <div class="card is-radiusless" :style="getEventBackgroundColor">
    <div class="card-content is-radiusless">{{ event.details }}</div>
    <footer class="card-footer is-borderless">
      <button class="button is-success card-footer-item is-radiusless is-small">
        <font-awesome-icon icon="floppy-disk" />
      </button>
      <button class="button is-info card-footer-item is-radiusless is-small">
        <font-awesome-icon icon="fa-pen-to-square" />
      </button>
      <button class="button is-danger card-footer-item is-radiusless is-small">
        <font-awesome-icon icon="fa-trash" />
      </button>
    </footer>
  </div>
  <div></div>
</template>

<script>
export default {
  props: ["event"],
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
</style>