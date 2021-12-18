<template>
  <div class="home">
    <Pokedesk :pokemons="pokemons" :totalPokemons="totalPokemons" />
    <router-view></router-view>
  </div>
</template>

<script>
import Pokedesk from "@/components/Pokedesk.vue";
import { api } from "@/services.js";
export default {
  name: "Home",
  components: {
    Pokedesk,
  },
  data() {
    return {
      pokemons: [],
      totalPokemons: 0,
      paginacao: 1,
    };
  },
  created() {
    this.pegandoPokemons(this.paginacao);
  },
  methods: {
    pegandoPokemons(page) {
      const pokemonPorPagina = [];

      api
        .get(
          "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
        )
        .then((response) => {
          const dados = response.data;
          const filterPokemon = (page - 1) * 12;

          dados.forEach((element) => {
            if (element.id > filterPokemon && pokemonPorPagina.length < 12) {
              pokemonPorPagina.push(element);
            }
          });

          this.totalPokemons = Number(dados.length);
          this.pokemons = pokemonPorPagina;

          console.log(pokemonPorPagina);
        });
    },
  },
  watch: {
    $route() {
      this.pegandoPokemons(this.$route.query._page);
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
