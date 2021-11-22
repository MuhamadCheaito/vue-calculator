<template>
    <button
    @click="dispatch({type:'choose-operation', payload: { operation }})">
        {{operation}}
    </button>
</template>
<script>
export default{

name:"OperationButton",

props:['operation','dispatch'],

}
</script>