<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                Shurl
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-show="!isLoggedIn">
                        <router-link class="nav-link" to="/login">
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="!isLoggedIn">
                        <router-link class="nav-link" to="/register">
                            Register
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="isLoggedIn">
                        <router-link class="nav-link" to="/dashboard">
                            Dashboard
                        </router-link>
                    </li>
                    <li class="nav-item" v-show="isLoggedIn">
                        <a class="nav-link" @click="logout" href="#">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        mounted() {
            this.isLoggedIn = !!this.$cookies.get('api_token');
        },
        props: {},
        data() {
            return {
                isLoggedIn: false
            }
        },
        created() {
            EventDispatcher.listen('loggedIn', () => {
                this.isLoggedIn = true;
            });
            EventDispatcher.listen('loggedOut', () => {
                this.isLoggedIn = false;
            });
        },
        methods: {
            logout() {
                this.isLoggedIn = false;
                this.$cookies.remove('api_token');
                this.$router.push('/login');
            }
        },
        name: 'navbar'
    };
</script>
