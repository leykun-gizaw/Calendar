<template>
  <div class="card is-radiusless">
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
};
</script>

<style lang="scss" scoped>
button {
  border: none;
}
</style>