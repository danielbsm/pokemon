<template>
  <div>
    <router-link
      :to="{
        name: 'pokemonDetails',
        params: { pokemon: pokemon.name.english.toLowerCase() },
      }"
    >
      <div class="card" :class="pokemon.type[0]">
        <span>#{{ maskZeros(pokemon.id, 3) }}</span>
        <div>
          <div class="base">
            <h3>Status</h3>
            <span class="base-card">HP: {{ pokemon.base.HP }}</span>
            <span class="base-card">Ataque: {{ pokemon.base.Attack }}</span>
            <span class="base-card">Defesa: {{ pokemon.base.Defense }}</span>
            <span class="base-card">Velocidade: {{ pokemon.base.Speed }}</span>
          </div>
          <h4 class="name-pokemon">{{ pokemon.name.english }}</h4>
          <div v-for="(type, index) in pokemon.type" :key="type + index">
            <div class="type">
              <span class="type-card">{{ type }}</span>
            </div>
          </div>
        </div>
        <img
          class="pokemon_image"
          :src="`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${maskZeros(
            pokemon.id,
            3
          )}.png`"
          alt=""
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["pokemon"],
  data() {
    return {};
  },
  methods: {
    maskZeros(value, padding) {
      let zero = new Array(padding + 1).join("0");
      return (zero + value).slice(-padding);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
/* do robson */
.card {
  min-width: 300px;
  position: relative;
  cursor: pointer;
  padding: 20px;
  height: 170px;
  margin: 10px;
  transition: 0.5s;
  border-radius: 10px;
  box-shadow: 1px 4px 6px 0px #c5bbbb;
}

/*
do brother
.card {
  position: relative;
  padding: 20px;
  height: 170px;
  margin: 10px;
  transition: 0.5s;
} */
.card:hover {
  transform: scale(1.1);
}
.card > span {
  position: absolute;
  right: 0;
  top: 5px;
  color: rgba(255, 255, 255, 0.384);
  font-size: 40px;
}
.card > .pokeball-img {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  width: 90px;
  right: 0;
  top: 70px;
}
.name-pokemon {
  color: white;
  font-weight: bold;
}
.pokemon_image {
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 45px;
  width: 120px;
}

.base {
  width: 100px;
  position: absolute;
}

.base h3 {
  margin: 0;
  padding: 0;
  color: white;
}

.base-card {
  border: 0px solid;
  padding: 4px 0px;
  margin-top: 5px;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  background-color: rgba(17, 17, 17, 0.322);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.type {
  margin-top: 15px;
}
.type-card {
  border: 0px solid;
  padding: 4px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  background-color: rgba(17, 17, 17, 0.322);
}

.Grass {
  background-color: #9bcc50;
}
.Bug {
  background-color: #729f3f;
}
.Dragon {
  background-color: coral;
}
.Normal {
  background-color: #a4acaf;
}
.Flying {
  background-color: #3dc7ef;
}
.Ground {
  background-color: #ab9842;
}
.Dark {
  background-color: #707070;
}
.Rock {
  background-color: #a38c21;
}
.Ghost {
  background-color: #7b62a3;
}
.Ice {
  background-color: #52c5e8;
}
.Steel {
  background-color: #9fb8b9;
}
.Fighting {
  background-color: #d56723;
}
.Psychic {
  background-color: #f366b9;
}
.Electric {
  background-color: #efd636;
}
.Fire {
  background-color: #fd7d24;
}
.Fairy {
  background-color: #febaea;
}
.Water {
  background-color: #4592c4;
}
.Poison {
  background-color: #b97fc9;
}
</style>
