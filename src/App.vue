<template>
  <div id="app">
    <ul>
      <li><router-link to = "/">Overview </router-link></li>
      <li><router-link to = "/follower">Follower ({{user.followers}}) </router-link></li>
      <li><router-link to = "/following">Following ({{user.following}})</router-link></li>
    </ul>
  <router-view>
  </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user: {
        followers: 0,
        following: 0,
      },
    };
  },
  components: {

  },
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
