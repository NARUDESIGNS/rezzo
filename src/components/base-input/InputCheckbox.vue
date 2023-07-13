<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    filled?: boolean;
    title?: string;
    disabled?: boolean;
    color?: string;
    error?: boolean;
    size?: number;
  }>(),
  {
    modelValue: false,
    color: "#1967ff",
    size: 32,
  }
);

const input = ref(null as unknown as HTMLElement);

onMounted(() => {
  // accept custom color and set input color
  if (props.color) {
    input.value.style.setProperty("--inputCheckbox", props.color);
  }
});

const size = computed(() => {
  return `${props.size}px`;
});
</script>

<template>
  <input
    :class="[
      $style.input,
      { [$style['filled-style']]: filled },
      { [$style.error]: error },
    ]"
    type="checkbox"
    :id="title"
    ref="input"
    :disabled="disabled"
    :checked="modelValue"
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
  --inputCheckbox: colors.use("border");
  appearance: none;
  margin: 0;
  outline: none;
  width: v-bind(size);
  height: v-bind(size);
  position: relative;
}
.input:before {
  content: "";
  display: block;
  border-radius: 0.3em;
  width: inherit;
  height: inherit;
  border: 1px solid colors.use("border-light");
  cursor: pointer;
  transition: 0.5s cubic-bezier(0, 1.12, 1, 1.08);
}
.input:after {
  content: "";
  display: block;
  visibility: hidden;
  width: 45%;
  height: 20%;
  position: absolute;
  top: 32%;
  left: 30%;
  border: solid var(--inputCheckbox);
  border-width: 0 0 2px 2px;
  cursor: pointer;
  transform: rotate(310deg);
}
.input:checked:after {
  visibility: visible;
}

.input:focus-within::before {
  border: 1px solid var(--inputCheckbox, #1c7ed6);
}

.input:hover:before {
  border-color: var(--inputCheckbox);
}

.input:disabled:before {
  opacity: 0.4;
  cursor: not-allowed;
}

.filled-style:checked:after {
  border-color: white;
  visibility: visible;
}
.filled-style:checked:before {
  border: 1px solid transparent;
  background-color: var(--inputCheckbox);
}

.error::before {
  border-color: #f03e3e;
}
</style>
