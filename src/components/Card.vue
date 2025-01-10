<template>
    <div class="relative">
        <!-- Card Content -->
        <CardImg
            :id="card.id"
            :image="card.image"
            :altText="card.altText"
            :title="card.title"
            :description="card.description"
            :tags="card.tags"
            @deleteCard="$emit('deleteCard', { id: card.id, image: card.image })"
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
    },
    emits: ['deleteCard'],
}
</script>
