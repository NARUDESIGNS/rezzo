<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import BaseAction from "@/components/base-action/BaseAction.vue";
import BaseBackdrop from "@/components/base-backdrop/BaseBackdrop.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import BaseInfo from "@/components/base-info/BaseInfo.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputCheckbox from "@/components/base-input/InputCheckbox.vue";
import InputDate from "@/components/base-input/InputDate.vue";
import InputMultiText from "@/components/base-input/InputMultiText.vue";
import InputNumber from "@/components/base-input/InputNumber.vue";
import InputPassword from "@/components/base-input/InputPassword.vue";
import InputSelect from "@/components/base-input/InputSelect.vue";
import InputSwitch from "@/components/base-input/InputSwitch.vue";
import InputText from "@/components/base-input/InputText.vue";
import InputTextArea from "@/components/base-input/InputTextArea.vue";
import BaseLoader from "@/components/base-loader/BaseLoader.vue";
import BaseModal from "@/components/base-modal/BaseModal.vue";
import BaseSearch from "@/components/base-search/BaseSearch.vue";
import BaseSteps from "@/components/base-steps/BaseSteps.vue";
import { computed, ref } from "vue";

const checkbox = ref(true);
const switchCheck = ref(false);
const checkboxFilled = ref(true);

const email = ref("narudesigns@mail");
const firstName = ref("Paul");
const lastName = ref("Ibeabuchi");
const middleName = ref("Naru");
const numbr = ref(10);
const password = ref("Narudesigns!");
const textarea = ref("Testing notes...");
const date = ref(new Date().toLocaleDateString());
const searchQuery = ref();
const skills = ref(["Nodejs", "Vue", "React"]);
const selected = ref("Item C");

const infoType = ref();
const infoProps = computed(() => ({
  primary: infoType.value === "primary",
  warning: infoType.value === "warning",
  danger: infoType.value === "danger",
}));

const totalSteps = ref(5);
const currentStep = ref(3);

const showBackdrop = ref();

const logDetails = (info?: string | number) => {
  alert(info ?? "input filed will be removed when this button is clicked");
};

const logItemData = (itemData: string[]) => console.log(itemData);

const showModal = ref(false);
const showPopup = ref(false);
</script>

<template>
  <PageCenter hide-nav>
    <div :class="$style.wrap">
      <BaseInfo enable-close v-bind="infoProps">
        <template #header>
          <h4>Quick Note</h4>
        </template>
        <p>
          By the way, make sure to go through each component and explore as much
          as you want. These components are reusable blocks which will be used
          in building the
          <BaseAction
            href="https://github.com/narudesigns/rezzo"
            v-bind="infoProps"
          >
            rezzo
          </BaseAction>
          project from start to finish!
        </p>
        <div :class="$style.info_options_wrap">
          <span :class="$style.info_option" @click="infoType = 'primary'">
            primary
          </span>
          <span :class="$style.info_option" @click="infoType = 'warning'">
            warning</span
          >
          <span :class="$style.info_option" @click="infoType = 'danger'">
            danger
          </span>
          <span :class="$style.info_option" @click="infoType = null"
            >reset</span
          >
        </div>
      </BaseInfo>
      <h2 :class="$style.header">Buttons</h2>
      <div :class="$style.content">
        <BaseButton> Primary Button </BaseButton>
        <BaseButton is-loading />

        <BaseButton danger> Danger Button </BaseButton>
        <BaseButton is-loading danger />

        <BaseButton outline> Normal Button </BaseButton>
        <BaseButton is-loading outline />

        <BaseButton danger disabled> Danger Button </BaseButton>
        <BaseButton disabled> Primary Button </BaseButton>
        <BaseButton outline disabled> Normal Button </BaseButton>

        <ButtonLabel plus>Add Button Label</ButtonLabel>
        <ButtonLabel minus>Minus Button Label</ButtonLabel>
        <ButtonLabel plus disabled>Add Button Label</ButtonLabel>
        <ButtonLabel minus disabled>Minus Button Label</ButtonLabel>
        <ButtonLabel plus :size="40" />
        <ButtonLabel minus :size="40" />

        <BaseAction
          href="/"
          :action="() => logDetails('Test Action')"
          label="Go Home"
        />

        <BaseAction
          :action="() => logDetails('Test Danger Action')"
          label="Danger Action"
          danger
        />

        <BaseAction :action="() => {}" label="Disabled Action" disabled />
      </div>

      <h2 :class="$style.header">Loaders</h2>
      <div :class="$style.content">
        <BaseLoader :size="50" />
        <BaseLoader :size="40" />
        <BaseLoader :size="30" />
        <BaseLoader />
      </div>

      <h2 :class="$style.header">Checkboxes</h2>
      <div :class="$style.content">
        <InputSwitch v-model="switchCheck" />
        <InputSwitch disabled />
        {{ checkbox }}
        <InputCheckbox v-model="checkbox" />
        <InputCheckbox v-model="checkboxFilled" filled />
        <InputCheckbox :size="20" />
        <InputCheckbox :size="20" filled />
        <InputCheckbox checked disabled />
        <InputCheckbox id="checkBox" filled />
        <label for="checkBox" :style="{ cursor: 'pointer' }">Remember Me</label>
      </div>

      <h2 :class="$style.header">Input Fields</h2>
      <div :class="[$style.content, $style.input_fields]">
        <BaseSearch v-model="searchQuery" placeholder="search..." />

        <FieldLabel label="First Name" required />
        <InputText v-model="firstName" required />

        <FieldLabel label="lastName" />
        <InputText v-model="lastName" @input-removed="() => logDetails()" />

        <FieldLabel label="email" required />
        <InputText
          v-model="email"
          error-msg="Invalid Email Address!"
          required
          error
        />

        <FieldLabel label="Middle Name" disabled />
        <InputText v-model="middleName" type="text" disabled />

        <FieldLabel label="Placeholder" />
        <InputText
          type="text"
          placeholder="Tell me a secret here..."
          @input-removed="() => logDetails()"
        />

        <FieldLabel label="Password" required />
        <InputPassword
          v-model="password"
          required
          @input-removed="() => logDetails()"
        />

        <FieldLabel label="Number" />
        <InputNumber
          v-model="numbr"
          :min="1"
          :max="10"
          @input-removed="() => logDetails()"
        />

        <FieldLabel label="Text Area" required />
        <InputTextArea
          v-model="textarea"
          required
          @input-removed="() => logDetails()"
        />

        <FieldLabel label="Date" required />
        <InputDate v-model="date" />

        <FieldLabel label="Select Option" required />
        {{ selected }}
        <InputSelect
          v-model="selected"
          :items="['Item A', 'Item B', 'Item C']"
        />

        <FieldLabel label="Skills" required />
        <InputMultiText
          v-model:data="skills"
          placeholder="add items clicking on the tab key"
          @items-added="(itemData) => logItemData(itemData)"
        />
      </div>

      <h2 :class="$style.header">Others</h2>
      <div :class="[$style.content, $style.stepsWrap]">
        <BaseSteps
          :steps="totalSteps"
          :current-step="currentStep"
          :style="{ width: '60%' }"
          @step-clicked="(value) => logDetails(value)"
        />
        <div :class="$style.stepsProps">
          <div>
            <FieldLabel label="Steps" no-margin="top" />
            <InputNumber
              v-model="totalSteps"
              placeholer="enter number of steps e.g 7"
            />
          </div>
          <div>
            <FieldLabel label="Current Step" no-margin="top" />
            <InputNumber
              v-model="currentStep"
              placeholer="enter number of steps e.g 7"
            />
          </div>
        </div>
      </div>

      <h2 :class="$style.header">Actions</h2>
      <div :class="$style.content">
        <BaseButton @click="showBackdrop = true"> Show Backdrop</BaseButton>
        <BaseBackdrop
          :visible="showBackdrop"
          @click.self="showBackdrop = false"
        />
        <BaseButton @click="showModal = true">Open Modal</BaseButton>
        <BaseModal v-model="showModal" enable-close click-anywhere>
          <template #header> <h1>Modal Header</h1> </template>
          <p :style="{ lineHeight: 2 }">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur maxime dolore facere! Nemo nostrum commodi deleniti
            numquam, eveniet nesciunt fugit officiis quod aliquam sed velit.
            Incidunt dolorum, repellat hic quo aliquam magnam quia harum quasi
            optio dignissimos doloremque nisi id error quis omnis totam esse
            placeat aut nulla velit vitae! Veritatis minus, dolorum consequuntur
            maxime saepe ullam libero voluptatum. Sequi libero ea adipisci.
            Sapiente quaerat alias eum ex similique, praesentium nostrum
            voluptatem quia minima at illum eligendi!
          </p>
        </BaseModal>
        <BaseButton @click="showPopup = true">Open Popup</BaseButton>
        <BaseDialog v-model="showPopup">
          <template #header>
            <h3>Cancel Subscription</h3>
          </template>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, quibusdam, soluta optio cupiditate alias magni natus
            ducimus odio quo deleniti hic nisi sed repudiandae excepturi.
          </p>
          <template #buttons>
            <BaseButton danger @click="showPopup = false"> Cancel </BaseButton>
            <BaseButton outline @click="showPopup = false">
              Discard
            </BaseButton>
          </template>
        </BaseDialog>
      </div>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";
.test {
  width: 500px;
}

.wrap {
  padding: 20px;
}

.info_options_wrap {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;

  .info_option {
    padding: 3px 10px;
    font-size: 14px;
    border: 1px solid colors.use(v-bind(infoType));
    border-radius: 100px;
    cursor: pointer;
  }
}

.header {
  margin-bottom: 20px;
}
.content {
  margin-bottom: 40px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid colors.use("border-light");
  border-radius: 7px;
  padding: 40px;
}

.input_fields {
  align-items: flex-start;
  flex-direction: column;
  gap: 0;
}

.stepsWrap {
  flex-direction: column;
  align-items: flex-start;

  .stepsProps {
    display: flex;
    gap: 20px;
  }
}

@media screen and (max-width: 400px) {
  .content {
    // justify-content: center;
    padding: 30px 20px;
  }
}
</style>
