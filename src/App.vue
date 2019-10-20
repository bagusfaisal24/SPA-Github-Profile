<template>
  <div id="app">
      <div class="column is-three-fifths is-offset-one-fifth">
          <div class="tabs is-medium is-centered col-md-9">
            <ul>
              <li class="is-active"><router-link to="/"><a>Repository</a></router-link></li>
              <li><router-link to="/profile"><a>Profile</a></router-link></li>
            </ul>
          </div>
          <router-view>
          </router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00503e;
  margin-top: 10px;
}
</style>
