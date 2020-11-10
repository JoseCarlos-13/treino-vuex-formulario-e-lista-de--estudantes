<template>
  <div class="buttons">
    <button style="background-color: blue" @click="add">
      Adicionar <br />Pessoa
    </button>
    <button style="background-color: red" @click="remove">
      Remover <br />Pessoa
    </button>
    <button style="background-color: grey" @click="clearPeople">
      Limpar <br />Lista
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["addPerson", "removePerson"]),
    ...mapMutations(["clearPeople"]),
  },

  props: ["add", "clearFields", "remove"],
};
</script>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.buttons button {
  margin-left: 5px;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: 0px;
  box-shadow: 1px 2px 2px black;
  margin-right: 5px;
}
</style>
