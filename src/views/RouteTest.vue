<template>
    <div>
        <h1> Random Routes Page Wooop </h1>
        <!-- <h2> {{ $route.params.id }} </h2> -->
        <h2> {{ id }} </h2>
    </div>
</template>

<script>
export default {
    props: ['id'] // How do you have multiple props? Can you?
}
</script>
