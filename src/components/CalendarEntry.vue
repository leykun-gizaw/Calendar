<template>
  <div class="card">
    <div class="card-content">
      <input
        class="is-radiusless is-borderless"
        type="text"
        name=""
        id=""
        placeholder="New Event"
      />
      <div class="content has-text-primary">
        Day of event: <strong class="has-text-primary"><em>Monday</em></strong>
      </div>
      <footer>
        <button class="button is-primary is-outlined">Submit</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
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