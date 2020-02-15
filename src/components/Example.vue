<template>
    <section id="main">
        <div class="container">
            <h2>{{ message }}</h2>
            <span>{{ date }}</span>
            <p>Vue старается управлять элементами DOM настолько эффективно, насколько это возможно, зачастую переиспользуя их вместо того чтобы создавать заново.</p>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            message: null,
            date: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage;
        this.date = this.$store.getters.getDate;
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