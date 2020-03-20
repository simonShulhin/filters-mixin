<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset2 col-md-6 col-md-offset-3">
        <h1>FIlters and Mixins</h1>
        <hr />
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from '../fruit-mixin';
export default {
  mixins: [fruitMixin],
  created() {
    console.log('List Created');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
