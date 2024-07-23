<template>
    <div>
        <CardImg
            :image="card.image"
            :altText="card.altText"
            :title="card.title"
            :description="card.description"
            :tags="card.tags"
        />
    </div>
</template>

<script>
import CardImg from './CardImg.vue';

export default {
    name: 'Card',
    components: {
        CardImg
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
</style>

