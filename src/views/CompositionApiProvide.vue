<template>
    <CompositionApiInject/>
</template>

<script>
import {provide} from 'vue';
import CompositionApiInject from './CompositionApiInject';

export default {
  components: { CompositionApiInject },
  setup() {
      provide('title', 'Vue.js 프로젝트');
  }
}
</script>
