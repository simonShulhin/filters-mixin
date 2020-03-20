export const fruitMixin = {
  data: () => ({
    fruits: ['apple', 'banana', 'mango', 'melon'],
    filterText: '',
  }),

  computed: {
    filteredFruits() {
      return this.fruits.filter(el => el.match(this.filterText));
    },
  },
  created() {
    console.log('Created');
  },
};
