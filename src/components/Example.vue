<template>
    <section id="main">
        <div class="container">
            <h2>{{ message }}</h2>
            <p>Vue старается управлять элементами DOM настолько эффективно, насколько это возможно, зачастую переиспользуя их вместо того чтобы создавать заново. Кроме улучшения производительности, у этого подхода есть и другие преимущества.</p>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            message: null,
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>
<style lang="scss" scoped>
    h2 {
      color: red;
    }
</style>