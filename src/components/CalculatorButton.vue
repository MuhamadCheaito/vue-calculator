<template>
  <button @click="eval">{{ digit || operation }}</button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CalculatorButton",
  props: {
    digit: {
      required: false,
      type: Number,
    },
    operation: {
      required: false,
      type: String,
    },
  },
  methods: {
    eval() {
      let store = this.$store;
      let currentOprand = store.state.currentOprand || "";
      let previousOprand = store.state.previousOprand || "";
      let operation = store.state.operation;
      if (this.operation == "=") {
        let result = handleOperations(
          operation,
          previousOprand,
          currentOprand
        ).toString();
        store.commit("setCurrentOprand", result);
        store.commit("setPreviousOprand", null);
        store.commit("setOperation", null);
      } else if (this.operation == "DEL") {
        let removed_number = currentOprand.slice(0, -1);
        store.commit("setCurrentOprand", removed_number);
      } else if (this.operation == "AC") {
        store.commit("setCurrentOprand", null);
        store.commit("setPreviousOprand", null);
        store.commit("setOperation", null);
      } else if (this.digit || this.operation == ".") {
        let appended_number = `${currentOprand}${this.digit || this.operation}`;
        store.commit("setCurrentOprand", appended_number);
      } else if (this.operation && !operation) {
        store.commit("setOperation", this.operation);
        store.commit("setPreviousOprand", currentOprand);
        store.commit("setCurrentOprand", null);
      }
    },
  },
});

function handleOperations(operation, first, second) {
  first = parseFloat(first);
  second = parseFloat(second);
  if (operation == "+") return first + second;
  else if (operation == "-") return first - second;
  else if (operation == "÷") return first / second;
  else if (operation == "*") return first * second;
}
</script>
