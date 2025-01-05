<template>
    <div>
        <form @submit.prevent="handleSubmit" class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <!-- Select Dropdown -->
            <div class="mb-4">
                <label for="category" class="block text-gray-600 font-medium">Category</label>
                <select
                    v-model="category"
                    id="category"
                    name="category"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="" disabled selected>Select a category</option>
                    <option value="art">Art</option>
                    <option value="concept">Concept</option>
                    <option value="tattoo">Tattoo</option>
                </select>
            </div>

            <!-- Title Input -->
            <div class="mb-4">
                <label for="title" class="block text-gray-600 font-medium">Title</label>
                <input v-model="title" type="text" id="title" name="title"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your art title" />
            </div>

            <!-- Details Textarea -->
            <div class="mb-4">
                <label for="details" class="block text-gray-600 font-medium mb-2">Details</label>
                <textarea v-model="details" id="details" name="details"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Describe what you want people to know about your piece!" rows="4"></textarea>
            </div>

            <!-- File Upload with Drag-and-Drop -->
            <label for="image" class="block text-gray-600 font-medium mb-2">Upload Image</label>
            <div class="mb-4 p-4 border-dashed border-2 rounded-md border-gray-400 text-center"
                @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false" @drop.prevent="handleDrop"
                :class="{ 'bg-blue-50': dragOver }">
                <input type="file" id="file" name="file" class="hidden" ref="fileInput" @change="handleFileChange" />
                <label for="file" class="block text-gray-600 font-medium cursor-pointer">
                    Drag and drop your file here or click to upload
                </label>
                <p v-if="selectedFile" class="text-gray-500 mt-2">
                    Selected file: {{ selectedFile.name }}
                </p>
            </div>

            <!-- Submit Button -->
            <button type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: '',
            title: '',
            details: '',
            dragOver: false,
            selectedFile: null,
        };
    },
    methods: {
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        handleDrop(event) {
            this.dragOver = false;
            if (event.dataTransfer.files.length > 0) {
                this.selectedFile = event.dataTransfer.files[0];
            }
        },
        handleSubmit() {
            if (!this.title || !this.details || !this.selectedFile) {
                alert('Please fill out all fields and upload a file.');
                return;
            }
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('details', this.details);
            formData.append('file', this.selectedFile);

            // Simulate form submission
            console.log('Form data submitted:', formData);
            alert('Form submitted successfully!');
        },
    },
};
</script>

<style scoped>
.bg-blue-50 {
    background-color: #ebf8ff;
}
</style>
