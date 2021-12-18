<template>
  <div class="container">
    <div class="row">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <Card :pokemon="pokemon" />
      </div>
    </div>
    <Paginacao :totalPokemons="totalPokemons"></Paginacao>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Paginacao from "@/components/Paginacao.vue";

export default {
  name: "pokedesk",
  props: {
    totalPokemons: {
      type: Number,
      default: 1,
    },
    pokemons: {
      type: Array,
    },
  },
  components: {
    Card,
    Paginacao,
  },
  data() {
    return {};
  },
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1250px;
}
</style>
