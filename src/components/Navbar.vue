<script>
export default {
    data() {
        return {
            currentRoute: this.$route.path,
        };
    },
    watch: {
        $route(to, from) {
            this.currentRoute = to.path;
        },
    },
    methods: {
        isActive(route) {
            return this.currentRoute === route;
        },
    },
};
</script>

<template>
    <header class="bg-white shadow-lg h-24 hidden md:flex">
        <a href="/" class="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
            <img class="w-96" src="../assets/mjo-temp-logo.jpg" alt="mjo logo" />
        </a>
        <nav class="header-links contents font-semibold text-base lg:text-lg">
            <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
                <li :class="{ 'active': isActive('/') }" class="hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <span><router-link to="/">Home</router-link></span>
                </li>
                <li :class="{ 'active': isActive('/request') }" class="hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <span><router-link to="/request">Requests</router-link></span>
                </li>
                <li :class="{ 'active': isActive('/add') }" class="hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <span><router-link to="/add">Add</router-link></span>
                </li>
                <li :class="{ 'active': isActive('/about') }" class="hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                    <span><router-link to="/about">About</router-link></span>
                </li>
            </ul>
        </nav>
        <nav class="hidden xl:contents">
            <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
                <li class="p-1">
                    <a href="https://www.instagram.com/mjos_creations"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512" class="h-4 svg-inline--fa fa-instagram fa-w-16 fa-9x">
                            <path fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93s-57.7-34.5-93-36.2c-36.6-2.1-146.6-2.1-183.2 0-35.3 1.7-66.7 9.9-93 36.2s-34.5 57.7-36.2 93c-2.1 36.6-2.1 146.6 0 183.2 1.7 35.3 9.9 66.7 36.2 93s57.7 34.5 93 36.2c36.6 2.1 146.6 2.1 183.2 0 35.3-1.7 66.7-9.9 93-36.2s34.5-57.7 36.2-93c2.1-36.6 2.1-146.6 0-183.2zm-48.6 224c-7.8 19.6-23 35.7-42.6 43.5-29.5 11.7-99.2 9-132.1 9s-102.6 2.6-132.1-9c-19.6-7.8-35.7-23.9-43.5-43.5-11.7-29.5-9-99.2-9-132.1s-2.6-102.6 9-132.1c7.8-19.6 23.9-35.7 43.5-43.5 29.5-11.7 99.2-9 132.1-9s102.6-2.6 132.1 9c19.6 7.8 35.7 23.9 43.5 43.5 11.7 29.5 9 99.2 9 132.1s2.7 102.6-9 132.1z">
                            </path>
                        </svg>
                    </a>
                </li>

                <li class="p-1">
                    <a href="https://www.facebook.com/MJOsCreations"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                            class="h-4 svg-inline--fa fa-facebook-f fa-w-10 fa-7x">
                            <path fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="border flex items-center px-4 lg:px-6 xl:px-8">
            
            <router-link to="/contact"
                class="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact
                Me</router-link>
        </div>
    </header>
</template>

<style scoped>
.header-links li {
    padding: 1em;
}

.header-links li span {
    position: relative;
    z-index: 0;
    color: black;
    font-weight: bold;
}

.header-links li span::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 2px;
    left: -4px;
    right: -4px;
    display: block;
    height: 6px;
}

.header-links li.active span::before {
    background-color: #fcae04;
}

.header-links li:not(.active):hover span::before {
    background-color: #ccc;
}

svg {
    width: 20px;
}
</style>