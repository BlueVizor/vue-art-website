<template>
    <div class="flex-initial mx-4 my-4 max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full max-h-80" :src="image" :alt="altText">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="tag in tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{{ tag }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardImg',
    props: {
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
        }
    }
}
</script>

<style scoped>
</style>
