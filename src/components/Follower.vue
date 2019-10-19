<template>
  <div class="card">
    <ul>
      <li v-bind:key="follower.id" v-for="follower in followers">
        <User v-bind:user="follower"></User>
      </li>
    </ul>
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'Follower',
  data() {
    return {
      followers: [],
    };
  },
  components: {
    User,
  },
  methods: {
    getProfile() {
      fetch('https://api.github.com/users/bagusfaisal24/followers')
        .then(r => r.json())
        .then((data) => {
          this.followers = data;
        })
        .catch(e => console.log(e));
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
