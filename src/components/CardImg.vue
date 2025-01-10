<template>
    <div class="flex-initial mx-4 my-4 max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <!-- Image Section -->
        <img class="w-full max-h-80" :src="image" :alt="altText">

        <!-- Title Section -->
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>

        <!-- Tag Section (Remove if not used) -->
        <div class="px-6 pt-4">
            <span v-for="tag in tags" :key="tag"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{{ tag }}
            </span>
        </div>

        <!-- Delete Button -->
        <div class="px-6 pb-2">
        <button
            class="top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
            @click="$emit('deleteCard', id)">
            Delete
        </button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CardImg',
    props: {
        id: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: false,
            default: 'Image'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    emits: ['deleteCard'],
}
</script>

<style scoped></style>
