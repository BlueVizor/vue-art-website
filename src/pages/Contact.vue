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
                    <a href="https://www.facebook.com/MJOsCreations" target="_blank" rel="noopener noreferrer"><img class="w-11 ml-2" src="../../facebook.svg" alt="Facebook Logo"/></a>
                    <a href="https://www.instagram.com/mjos_creations" target="_blank" rel="noopener noreferrer"><img class="w-11 ml-2" src="../../instagram.svg" alt="Instagram Logo"/></a>
                </div>
            </div>
        </div>
    </div>
</template>
