<template>
    <div>
        <!-- Art Section -->
        <div class="ml-20 pt-8" v-if="props.type == 'art'">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-blue-900 md:text-5xl lg:text-6xl"><span
                    class="bg-clip-text">Soar Into Innovation</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-100">Explore the unexplored. Witness
                the unwitnessed. Look around you, for you will see the unseen.</p>
        </div>

        <!-- Concept Art Section -->
        <div class="ml-20 pt-8" v-if="props.type == 'concept'">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Concept Designs
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
                Explore innovative concept designs crafted by an experienced artist.
            </p>
        </div>

        <!-- Tattoo Art Section -->
        <div class="ml-20 pt-8" v-if="props.type == 'tattoo'">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                    class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Do you believe
                    in...</span> Tattoos?</h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">Want to see what your final
                product could look like?</p>
        </div>

        <!-- Card Display -->
        <div class="flex flex-wrap px-7 py-5 justify-evenly">
            <Card v-for="(card, index) in cards" :key="card.id" :card="card" @deleteCard="deleteCard" />
        </div>
    </div>
</template>

<script setup>
import Card from './Card.vue';
import { ref, onMounted } from 'vue';
import { db, storage } from '../firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";

// Destructure the `type` prop
const props = defineProps({
    type: {
        type: String,
        required: true
    }
});

const cards = ref([]); // Reactive variable to store fetched data

onMounted(async () => {
    try {
        const q = query(collection(db, "art"), where("category", "==", props.type));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(docSnapshot => {
            const data = docSnapshot.data();
            cards.value.push({
                id: docSnapshot.id, // Firestore document ID
                title: data.title,
                description: data.details,
                image: data.imageUrl, // Full URL of the image in Firebase Storage
                storagePath: data.storagePath, // Path to the image in Firebase Storage
                tags: data.tags || [],
            });
        });
    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
});

// Delete card method
async function deleteCard({ id, image }) {
    try {
        const storagePath = decodeURIComponent(
            image
                .split("/o/")[1] // Split at "/o/" and take the part after it
                .split("?")[0]   // Remove query parameters like "?alt=media&token=..."
        );

        if (!storagePath) {
            throw new Error(`Invalid storagePath derived from imageUrl: ${image}`);
        }

        const imageRef = storageRef(storage, storagePath);

        await deleteObject(imageRef);
        console.log(`Image at path ${storagePath} deleted successfully.`);

        await deleteDoc(doc(db, "art", id));
        console.log(`Card with ID ${id} deleted successfully.`);

        cards.value = cards.value.filter(card => card.id !== id);
    } catch (error) {
        console.error("Error deleting card or image:", error);
    }
}
</script>
