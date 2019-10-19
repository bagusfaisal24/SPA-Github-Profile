<template>
  <div class="hello">
    <ul>
      <li v-bind:key="follow.id" v-for="follow in following">
        <User v-bind:user="follow"></User>
      </li>
    </ul>
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'hello',
  data() {
    return {
      following: [],
    };
  },
  components: {
    User,
  },
  methods: {
    getProfile() {
      fetch('https://api.github.com/users/bagusfaisal24/following')
        .then(r => r.json())
        .then((data) => {
          this.following = data;
        })
        .catch(e => console.log(e));
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
