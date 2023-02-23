<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FuncIcon',
  props: {
    path: {
      type: String,
      default: '/',
      required: true
    }
  },
  methods: {
    handClick(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.$on('click.native', this.handClick);
  }
};
</script>

<style>
</style>