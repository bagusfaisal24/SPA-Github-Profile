<template>
  <div class="hello">
    <article class="panel is-info">
      <p class="panel-tabs">
        <a class="is-active">All</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search">
          <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
        </p>
      </div>
      <div class="panel-block" v-bind:key="repo.id" v-for="repo in repos">
<!--      <a class="panel-block" v-bind:key="repo.id" v-for="repo in repos">-->
<!--        {{ repo.full_name }}-->
<!--        {{ repo.language }}-->
<!--      </a>-->
        <a class="title is-5">{{ repo.name }}</a>
        <a class="subtitle is-6">{{ repo.language }}</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  data() {
    return {
      repos: [],
    };
  },
  components: {},
  methods: {
    getRepository() {
      fetch('https://api.github.com/users/bagusfaisal24/repos')
        .then(r => r.json())
        .then((data) => {
          this.repos = data;
        })
      // eslint-disable-next-line no-console
        .catch(e => console.log(e));
    },
  },
  mounted() {
    this.getRepository();
  },
};
</script>


<style scoped>

</style>
