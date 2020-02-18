<template>
    <section id="main">
        <div class="container">
            <h2>{{ message }}</h2>
            <span>{{ date | formatDate }}</span>

            <p>Vue старается управлять элементами DOM настолько эффективно, насколько это возможно, зачастую переиспользуя их вместо того чтобы создавать заново.</p>
        </div>
    </section>
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