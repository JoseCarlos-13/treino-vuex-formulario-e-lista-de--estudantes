<template>
  <div class="mainDiv">
    <div class="form">
      <label>Nome:</label>
      <input type="text" v-model="name" />
      <label>Idade:</label>
      <input type="number" v-model="age" />

      <ButtonsForm :remove="remove" :add="add" :clearFields="clearFields" />
    </div>
    <StudentsList />
  </div>
</template>

<script>
import StudentsList from "../../components/StudentsList/StudentsList";
import ButtonsForm from "../../components/ButtonsForm/ButtonsForm";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    StudentsList,
    ButtonsForm,
  },
  data() {
    return {
      id: 0,
      age: "",
      name: "",
    };
  },

  computed: {
    ...mapState(["people"]),
    ...mapGetters(["valuePeople"]),
  },

  methods: {
    ...mapActions(["addPerson", "removePerson"]),
    ...mapMutations(["clearPeople"]),

    clearFields() {
      this.name = "";
      this.age = "";
    },

    add() {
      const person = {
        id: this.id++,
        name: this.name,
        age: this.age,
      };
      this.addPerson(person);
      alert("Usuário criado!");
      this.clearFields();
    },

    remove() {
      this.removePerson();
      alert("Usuário removido!");
    },
  },
};
</script>

<style>
body {
  background-image: url(https://cdn.hipwallpaper.com/i/17/64/J26r98.jpg);
}

.mainDiv {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.form {
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  justify-content: center;
  background-color: darkblue;
  color: white;
  border-radius: 5px;
  padding: 50px;
}

.form input {
  padding: 5px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>


