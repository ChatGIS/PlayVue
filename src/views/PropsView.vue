<!--
 * @Author: Dreamice dreamice13@foxmail.com
 * @Date: 2023-09-04 13:44:35
 * @LastEditors: Dreamice dreamice13@foxmail.com
 * @LastEditTime: 2023-09-05 00:39:47
 * @FilePath: \PlayVue\src\views\propsView.vue
 * @Description: 
-->
<script setup lang='ts'>
import PropsComp from '@/components/PropsComp.vue';

const obj = {
    id: 1, 
    name: "张三"
}
</script>

<template>
    <div>
        <h1>props</h1>
        <PropsComp father-message="4" v-bind="obj"></PropsComp>
    </div>
</template>

<style scoped>

</style>