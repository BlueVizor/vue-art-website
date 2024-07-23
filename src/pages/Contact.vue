<script setup>
console.log('Contact.vue component is rendered');
</script>

<template>
    <div class="bg-slate-400 min-h-screen">
        <h1 class="font-bold text-2xl text-center py-5">Contact Me</h1>
        <div class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <div class="mb-4 text-center">
                <p class="font-semibold">Email: </p>
                <p>mjocreations@gmail.com</p>
                <p class="font-semibold pt-3">Follow me:</p>
                <div class="mt-3 flex items-center justify-center">
                    <img class="w-11 ml-2" src="../../public/facebook.svg" alt="Facebook Logo" />
                    <img class="w-11 ml-2" src="../../public/instagram.svg" alt="Instagram Logo" />
                </div>
            </div>
        </div>
    </div>
</template>
