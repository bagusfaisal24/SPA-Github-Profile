<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img v-bind:src="user.avatar_url"  alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{user.login}}</p>
          <p class="subtitle is-6">{{user.url}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
};
</script>


<style scoped>

</style>
