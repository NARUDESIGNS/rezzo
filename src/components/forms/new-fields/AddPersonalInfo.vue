<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputText from "@/components/base-input/InputText.vue";
import { NewPersonalInfoType } from "@/types/PersonalInfoType";
import { computed, ref } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "addField", data: NewPersonalInfoType): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const data = ref<NewPersonalInfoType>({
  title: "",
  value: "",
});

const addField = () => {
  emit("addField", data.value);
  data.value.title = "";
  data.value.value = "";
  emit("close");
};
</script>

<template>
  <div @keyup.enter="addField">
    <BaseDialog v-model="showModal" disable-close>
      <template #header>
        <h3>Add New Field</h3>
      </template>
      <div :class="$style.form">
        <FieldLabel label="Title" required />
        <InputText v-model="data.title" required />
        <FieldLabel label="Value" required />
        <InputText v-model="data.value" required />
      </div>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton @click="addField" :disabled="!data.title || !data.value">
          Add Field
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style lang="scss" module>
.form :first-child {
  margin-top: 0;
}
</style>
