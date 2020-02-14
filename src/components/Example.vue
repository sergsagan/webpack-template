<template>
    <section id="main">
        <div class="container">
            <h2>{{ message }}</h2>
            <span>{{ description }}</span>
            <p>Vue старается управлять элементами DOM настолько эффективно, насколько это возможно, зачастую переиспользуя их вместо того чтобы создавать заново.</p>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            message: null,
            description: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage;
        this.description = this.$store.getters.getDescription;
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