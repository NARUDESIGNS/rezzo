<script setup lang="ts">
defineProps<{
  modelValue?: boolean;
  id?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <input
    :class="$style.input"
    type="checkbox"
    :id="id"
    ref="input"
    :checked="modelValue"
    @change="
      $emit(
        'update:modelValue',
        ($event.target as unknown as HTMLInputElement).checked
      )
    "
    :disabled="disabled"
  />
</template>

<style module lang="scss">
@use "@/scss/colors";

.input {
  vertical-align: middle;
  width: 40px;
  height: 20px;
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
  height: 15px;
  width: 15px;
  background-color: hsl(225, 100%, 98%);
  border-radius: 50%;
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: ease 0.3s;
}

.input:checked {
  background: colors.use("primary");
}

.input:checked::before {
  left: 22px;
}

.input:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
