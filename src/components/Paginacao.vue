<template>
  <div class="paginacao" v-if="paginasTotal > 1">
    <a class="paginacao_link" v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: { _page: pagina } }">{{ pagina }}</router-link>
    </a>
  </div>
</template>


<script>
export default {
  name: "Paginacao",
  props: {
    totalPokemons: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pageArray = [];

      for (let i = 1; i <= total; i++) {
        pageArray.push(i);
      }

      pageArray.splice(0, current - offset);
      pageArray.splice(range, total);
      return pageArray;
    },
    paginasTotal() {
      const total = this.totalPokemons / 12;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>


<style>
.paginacao {
  max-width: 900px;
  margin: auto;
}

.paginacao_link {
  display: inline-block;
  padding: 4px;
  width: 35px;
  background: #fff;
  color: #87f;
  margin: 4px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  cursor: pointer;
}

.paginacao_link:hover {
  background: #9bcc50;
  color: #fff;
}
</style>