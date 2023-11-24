<template>
  <div>
    <h1>{{ part.title }}</h1>
  </div>
  <div>
    {{ part.description }}
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

import { usePartStore } from "@/stores/partsStore";

const partsStore = usePartStore();

const props = defineProps(["partType", "id"]);
const part = computed(() => {
  return partsStore.parts[props.partType].find((part) => part.id === +props.id);
});
</script>

<style scoped></style>
