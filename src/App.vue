<template>
  <div id="app">
    <div class="calculator-grid">
      <div class="output">
        <div class="previous-operand">{{ previousOprand }} {{ operation }}</div>
        <div class="current-operand">{{ currentOprand }}</div>
      </div>
      <CalculatorButton operation="AC" class="span-two" />
      <CalculatorButton operation="DEL" />
      <CalculatorButton operation="÷" />
      <CalculatorButton :digit="1" />
      <CalculatorButton :digit="2" />
      <CalculatorButton :digit="3" />
      <CalculatorButton operation="*" />
      <CalculatorButton :digit="4" />
      <CalculatorButton :digit="5" />
      <CalculatorButton :digit="6" />
      <CalculatorButton operation="+" />
      <CalculatorButton :digit="7" />
      <CalculatorButton :digit="8" />
      <CalculatorButton :digit="9" />
      <CalculatorButton operation="-" />
      <CalculatorButton operation="." />
      <CalculatorButton :digit="0" />
      <CalculatorButton class="span-two" operation="=" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CalculatorButton from "./components/CalculatorButton.vue";
export default {
  name: "App",
  components: {
    CalculatorButton,
  },
  computed: mapState({
    currentOprand: (state) => state.currentOprand,
    previousOprand: (state) => state.previousOprand,
    operation: (state) => state.operation,
  }),
};
</script>