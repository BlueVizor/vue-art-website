<script setup>
import Card from './Card.vue';
import { ref, onMounted } from 'vue';

// Function to import all images from a directory using dynamic import
async function importArtImages() {
    const images = await import.meta.glob('../images/art/*.{jpg,png,svg}');
    return Object.keys(images).map(async key => ({
        image: await images[key](),
        altText: key.slice(14, -4).replace(/[_-]/g, ' '), // Generating alt text from filename
        title: key.slice(14, -4).replace(/[_-]/g, ' '), // Replace with your actual title logic
        description: 'A fantastic masterpiece!', // Replace with your actual description logic
        tags: [] // Replace with your actual tags logic
    }));
}

// Fetch images and map them to cards array
const cards = ref([]);

onMounted(async () => {
    const resolvedCards = await Promise.all(await importArtImages());
    cards.value = resolvedCards.map(card => ({
        ...card,
        image: card.image.default // Accessing the default export from the dynamic import
    }));
});
</script>

<template>
    <div>
        <div class="ml-20 pt-8">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-blue-900 md:text-5xl lg:text-6xl"><span class="bg-clip-text">Soar Into Innovation</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-100">Explore the unexplored. Witness the unwitnessed. Look around you, for you will see the unseen.</p>
        </div>
        
        <div class="flex flex-wrap px-7 py-5 justify-evenly">
            <Card v-for="(card, index) in cards" :key="index" :card="card" />
        </div>
    </div>
</template>

<style scoped></style>
