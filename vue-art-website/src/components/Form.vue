<template>
    <div>
        <form class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <div class="mb-4">
                <label for="name" class="block text-gray-600 font-medium">Name</label>
                <input type="text" id="name" name="name"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name" />
            </div>

            <div class="mb-4">
                <label for="email" class="block text-gray-600 font-medium">Email</label>
                <input type="email" id="email" name="email"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email" />
            </div>

            <div class="mb-4">
                <label for="title" class="block text-gray-600 font-medium">Commission Title</label>
                <input type="text" id="title" name="title"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your commission title" />
            </div>

            <div class="mb-4">
                <label for="details" class="block text-gray-600 font-medium mb-2">Commission Details</label>
                <textarea id="details" name="details"
                    class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="What would you like for your commisson?" rows="4"></textarea>
            </div>

            <button type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                Submit
            </button>
        </form>
    </div>
</template>

<style scoped></style>