<template>
    <PCalendar v-model="date" dateFormat="dd.mm.yy" placeholder="dd.mm.yy" showIcon />
</template>

<script setup>
import { ref } from "vue";
const date = ref();
name: 'QaCalendar';
</script>
