<template>
  <div class="card">
    <div class="card-content">{{ event.details }}</div>
    <footer class="card-footer">
      <button class="button is-primary card-footer-item is-radiusless">
        <font-awesome-icon icon="floppy-disk" />
      </button>
      <button class="button is-warning card-footer-item is-radiusless">
        <font-awesome-icon icon="fa-pen-to-square" />
      </button>
      <button class="button is-danger card-footer-item is-radiusless">
        <font-awesome-icon icon="fa-trash" />
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss" scoped>
</style>