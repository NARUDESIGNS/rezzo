<script setup lang="ts">
// import AboutIllustration from "@/assets/illustrations/AboutIllustration.vue";
import PageCenter from "@/components/PageCenter.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";

const navigate = () => location.assign("https://linkedin.com/in/narudesigns");
</script>

<template>
  <PageCenter>
    <div :class="$style.wrap">
      <!-- <h1 :class="$style.header">ABOUT US</h1>
      <p :class="$style.message">COMING SOON!</p>
      <AboutIllustration :class="$style.illustration" /> -->
      <div :class="$style.info_wrap">
        <span :class="$style.image_wrap">
          <img
            src="@/assets/images/naru-photo.jpeg"
            alt="user photo"
            :class="$style.image_photo"
          />
          <img
            src="@/assets/images/naru-memoji.jpg"
            alt="user memoji"
            :class="$style.image_memoji"
          />
        </span>
        <div :class="$style.info">
          <h1 :class="$style.info_header">IBEABUCHI PAUL NARU</h1>
          <h3 :class="$style.info_username">@narudesigns</h3>
          <p :class="$style.info_text">
            After successfully submitting over 200 applications and securing a
            job offer, I am eager to share the valuable insights I gained along
            the way, starting with the importance of crafting an effective
            resume, actively searching for job openings, leveraging networking
            for referrals, and thoroughly preparing for interviews.
            <br /><br />
            This platform is intended to be a community of supportive people,
            helping each other to get that one “YES” they need.
          </p>
        </div>
      </div>
      <BaseButton :class="$style.btn" @click="navigate">
        Connect With Me
      </BaseButton>
    </div>
  </PageCenter>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .header {
    color: lighten($color: colors.use("light-gray"), $amount: 30);
    font-weight: 900;
  }

  .message {
    font-size: 2rem;
    font-weight: 900;
  }

  .illustration {
    width: 80%;
    max-width: 350px;
  }
  .btn {
    width: 100%;
    max-width: 350px;
  }
}

.info_wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  .image_wrap {
    position: relative;

    .image_photo {
      border-radius: 50%;
      object-fit: cover;
      aspect-ratio: 1;
      width: 70%;
    }

    .image_memoji {
      position: absolute;
      border-radius: 50%;
      left: 7%;
      bottom: 20px;
      width: 70px;
    }
  }

  .info {
    width: 60%;

    .info_header {
      font-weight: 900;
    }
    .info_username {
      font-weight: 900;
      font-size: 1.8rem;
      display: inline-block;
      color: colors.use("primary");
      margin-bottom: 30px;
    }

    .info_text {
      line-height: 2;
    }
  }
}
</style>
