<template>
    <button
    @click="dispatch({type:'add-digit', payload: { digit }})">
        {{digit}}
    </button>
</template>
<script>

export default{
name:"DigitButton",

props:['digit','dispatch'],
}
</script>