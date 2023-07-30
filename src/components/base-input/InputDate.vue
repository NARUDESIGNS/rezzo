<script setup lang="ts">
import DatePicker from "@vuepic/vue-datepicker";
import { ref } from "vue";
import InputText from "./InputText.vue";

const date = ref(new Date());
</script>

<template>
  <DatePicker v-model="date" :enable-time-picker="false" format="dd/MM/yyyy">
    <template #dp-input="{ value, onInput, onEnter, onTab, onBlur }">
      <div :class="$style.container">
        <InputText
          autocomplete="off"
          :value="value"
          :disabled="false"
          placeholder="DD/MM/YY"
          :class="$style.input"
          :required="true"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
          @blur="onBlur"
          @keyup.esc="DatePicker?.closeMenu()"
        />
      </div>
    </template>
  </DatePicker>
</template>

<style module lang="scss">
// styles here...
</style>
