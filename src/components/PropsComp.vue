<script setup lang='ts'>
    const props = defineProps(['p1'])

</script>

<template>
    <div>
        <span>我是子组件，父组件传递的值为： {{ props.p1 }}</span>
    </div>
</template>

<style scoped>

</style>