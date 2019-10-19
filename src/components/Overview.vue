<template>
  <div class="hello">
      <img v-bind:src="user.avatar_url" width="48px">
      <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'hellooo',
  data() {
    return {
      user: {
      },
    };
  },
  components: {},
  methods: {
    getProfile() {
      fetch('https://api.github.com/users/bagusfaisal24')
        .then(r => r.json())
        .then((data) => {
          this.user = data;
        })
        .catch(e => console.log(e));
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
