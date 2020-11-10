<template>
  <div class="list">
    <label>
      <strong>Students</strong>
    </label>
    <ul v-for="p in people" :key="p.id">
      <li>{{ p.id }} - {{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["people"]),
    ...mapGetters(["valuePeople"]),
  },
};
</script>

<style>
.list {
  margin: 10px 50px auto 60px;
  display: flex;
  flex-direction: column;
  width: 35%;
  border: 2px solid black;
}

.list ul {
  list-style: none;
  background-color: darkred;
  color: white;
  border: 1px solid white;
  margin: 0px;
}

.list ul li {
  padding: 7px;
  text-align: center;
}

.list label {
  color: white;
  background-color: red;
  border: 2px solid white;
  padding: 6px;
}
</style>
