<!--
 * @Author: Dreamice dreamice13@foxmail.com
 * @Date: 2023-09-04 13:53:36
 * @LastEditors: Dreamice dreamice13@foxmail.com
 * @LastEditTime: 2023-09-05 15:43:46
 * @FilePath: \PlayVue\src\components\PropsComp.vue
 * @Description: 
-->
<script setup lang='ts'>
    // const props = defineProps(['fatherMessage'])
    const props = defineProps({
        fatherMessage: String,
        id: Number,
        name: String,
    })
</script>

<template>
    <div>
        <span>我是子组件，父组件传递的值为： {{ fatherMessage }}</span>
        <span>使用一个对象绑定多个prop, id： {{ id }}, name是 {{ name }}</span>
    </div>
</template>

<style scoped>

</style>