<template>
  <h1>{{ message }}</h1>
  <img 
    src="dfdf"
    alt="dfdf" />
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld';

  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        message: 'Hello Vue!!!'
      }
    }
  }
</script>
