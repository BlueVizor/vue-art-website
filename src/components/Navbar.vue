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
        <a href="" class="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
            <img class="w-96" src="../assets/mjo-temp-logo.jpg" alt="mjo logo" />
        </a>
        <nav class="header-links contents font-semibold text-base lg:text-lg">
            <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
                <li :class="{ 'active': isActive('/') }">
                    <span><router-link to="/">Home</router-link></span>
                </li>
                <li :class="{ 'active': isActive('/request') }">
                    <span><router-link to="/request">Requests</router-link></span>
                </li>
                <li :class="{ 'active': isActive('/about') }">
                    <span><router-link to="/about">About</router-link></span>
                </li>
            </ul>
        </nav>
        <nav class="hidden xl:contents">
            <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
                <li class="p-1">
                    <a href=""
                        class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            class="h-4 svg-inline--fa fa-twitter fa-w-16 fa-9x">
                            <path fill="currentColor"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="p-1">
                    <a href=""
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
            <a href="" class="mr-4 lg:mr-6 xl:mr-8">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="h-6 xl:h-8 svg-inline--fa fa-search fa-w-16 fa-3x">
                    <path fill="currentColor"
                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z">
                    </path>
                </svg>
            </a>
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