<template>
    <div class="LoginTop">
        <div></div>
        <div>{{middleTop}}</div>
        <div>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['middleTop']
}
</script>

<style scoped>
.LoginTop{
    height: 12.5vw;
    background-color: #fff;
    display: flex;
}
.LoginTop > div{
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 4.444vw;
    align-items: center;
}
</style>