<template>
  <div>
    <div v-for="poke in pokemon" :key="poke.id">
      {{ poke.species.name }}
    </div>
  </div>
</template>

<script>
import { api2 } from "@/services.js";

export default {
  name: "Pokemon",
  data() {
    return {
      pokemon: [],
    };
  },
  created() {
    this.chamandoPokemons();
  },
  methods: {
    chamandoPokemons() {
      api2.get(this.$route.params.pokemon).then((response) => {
        this.pokemon.push(response.data);
        console.log("response:", this.pokemon);
      });
    },
  },
};
</script>

<style></style>
