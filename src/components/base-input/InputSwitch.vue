<script setup lang="ts">
defineProps<{
  /** Model value */
  modelValue?: boolean;
  /** Input ID */
  id?: string;
  /** Disabled */
  disabled?: boolean;
}>();

defineEmits<{
  "update:modelValue": [value: boolean]; // vue v3.3+ more succint emit syntax
}>();
</script>

<template>
  <input
    :id="id"
    :class="$style.input"
    type="checkbox"
    :checked="modelValue"
    :disabled="disabled"
    @change="
      $emit(
        'update:modelValue',
        ($event.target as unknown as HTMLInputElement).checked
      )
    "
  />
</template>

<style module lang="scss">
@use "@/scss/colors";

.input {
  vertical-align: middle;
  width: 55px;
  height: 30px;
  appearance: none;
  -webkit-appearance: none;
  background-color: #e4e4e4;
  cursor: pointer;
  border-radius: 20px;
  outline: none;
  transition: ease 0.3s;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.input:before {
  content: "";
  display: block;
  height: 20px;
  width: 20px;
  background-color: hsl(225, 100%, 98%);
  border-radius: 50%;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: ease 0.2s;
}

.input:checked {
  background: colors.use("primary");
}

.input:checked::before {
  left: 30px;
}

.input:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
