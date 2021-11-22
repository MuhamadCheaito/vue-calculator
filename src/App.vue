<template>
  <div id="app">
    <div class="calculator-grid">
      <div class="output">
        <div class="previous-operand">
            {{ formatOperand(state.curr) }} {{ state.op }}
        </div>
        <div class="current-operand">{{ formatOperand(state.prev) }}</div>
      </div>
      <button
      class="span-two"
      @click="dispatch({type:'clear'})">AC</button>
      <button @click="dispatch({type:'delete-digit'})">DEL</button>
      <OperationButton operation="÷" :dispatch="dispatch"/>
      <DigitButton digit="1" :dispatch="dispatch"/>
      <DigitButton digit="2" :dispatch="dispatch"/>
      <DigitButton digit="3" :dispatch="dispatch"/>
      <OperationButton operation="*" :dispatch="dispatch"/>
      <DigitButton digit="4" :dispatch="dispatch"/>
      <DigitButton digit="5" :dispatch="dispatch"/>
      <DigitButton digit="6" :dispatch="dispatch"/>
      <OperationButton operation="+" :dispatch="dispatch"/>
      <DigitButton digit="7" :dispatch="dispatch"/>
      <DigitButton digit="8" :dispatch="dispatch"/>
      <DigitButton digit="9 " :dispatch="dispatch"/>
      <OperationButton operation="-" :dispatch="dispatch"/>
      <DigitButton digit="." :dispatch="dispatch"/>
      <DigitButton digit="0" :dispatch="dispatch"/>
      <button
        class="span-two"
        @click="dispatch({ type: 'evaluate' })">
        =
      </button>
    </div>
  </div>
</template>

<script>
import { _dispatch, _state } from './store/index';
import {computed, reactive} from '@vue/composition-api';

const DigitButton = () => import("./components/DigitButton.vue");
const OperationButton = () => import("./components/OperationButton.vue");

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
      maximumFractionDigits: 0,
});
function formatOperand(operand){
  if(operand == null) return;
  const [integer,decimal] = operand.split(".");
  if(decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
export default {
  
  name: 'App',
  components: {
    DigitButton,
    OperationButton
  },
  setup(){
    console.log('hello');
    const state = reactive({
       op: computed(() => _state.operation), 
       curr:computed(() => _state.currentOperand),
       prev: computed(() => _state.previousOperand),
    });
    return {
      state
      };
  },
  methods:{
    formatOperand,
    dispatch(type){
      _dispatch(type);
    },
  },
}
</script>