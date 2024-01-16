<template>
    <form action="/url" method="GET">
        <div class="mb-2">
            <label class="block mb-4" for="name">Name:</label>
            <input type="text" id="name" name="name" minlength="3" maxlength="20" required>
        </div>

        <div class="mb-2">
            <label class="block mb-4" for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="mb-2">
            <label class="block mb-4" for="reqTitle">Request Title:</label>
            <input type="text" id="reqTitle" name="reqTitle" required>
        </div>

        <div class="mb-2">
            <label class="block mb-4" for="reqDetail">Request Details:</label>
            <textarea class="border" type="text" id="reqDetail" name="reqDetail" required></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>
</template>

<style scoped></style>