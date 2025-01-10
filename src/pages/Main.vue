<script setup>
import CardGroupArt from "@/components/CardGroup_Art.vue";

const art = "art";
const concept = "concept";
const tattoo = "tattoo";
</script>

<template>
    <CardGroupArt :type="art" class="bg-slate-400 min-h-screen" />
    <CardGroupArt :type="concept" class="bg-slate-950 min-h-screen" />
    <CardGroupArt :type="tattoo" class="bg-blue-900 min-h-screen" />
</template>
