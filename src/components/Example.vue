<template lang="pug">
    section
        .container
            img(src="/assets/img/logo.png" :alt="message")
            span {{ date }}
            p {{ message }}
</template>
<script>
    import { formatDate } from '../js/common.js';
    export default {
        data() {
            return {
                message: null,
                date: new Date().toUTCString()
            }
        },
        created() {
            this.message = this.$store.getters.getMessage;
        },
        filters: {
            formatDate,
        }
    }
</script>
<style lang="scss" scoped>
    #main {
        display: flex;
        justify-content: center;
    }
    h2 {
      color: red;
    }

    span {
        color: blue;
    }
</style>