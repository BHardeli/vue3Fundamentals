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
import parts from "../data/parts";

const props = defineProps(["partType", "id"]);
const part = computed(() => {
    return parts[props.partType].find((part) => part.id === +props.id);
});
</script>

<style scoped></style>
