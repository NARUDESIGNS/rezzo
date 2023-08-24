<script setup lang="ts">
import PageCenter from "@/components/PageCenter.vue";
import BaseButton from "@/components/base-button/BaseButton.vue";

const navigate = () =>
  window.open("https://linkedin.com/in/narudesigns", "_blank");
</script>

<template>
  <PageCenter>
    <div :class="$style.wrap">
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
            After submitting over 200 applications and successfully securing a
            job offer, I am eager to share the valuable insights I gained along
            the way. These insights covers the importance of crafting an
            effective resume, actively searching for job openings, leveraging
            networking for referrals, and thoroughly preparing for interviews.
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
  gap: 100px;

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
    margin-bottom: 50px;
  }
}

.info_wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px;
  margin-top: 50px;
  gap: 50px;

  .image_wrap {
    position: relative;

    .image_photo {
      border-radius: 50%;
      object-fit: cover;
      width: 400px;
      height: 400px;
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
    width: 50%;

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

@media only screen and (max-width: 1020px) {
  .wrap {
    gap: 50px;
  }
  .info_wrap {
    flex-direction: column;
    padding: 20px;
    margin-top: 20px;

    .image_wrap {
      display: flex;
      justify-content: center;
      .image_photo {
        width: 60%;
        height: auto;
        aspect-ratio: 1;
      }

      .image_memoji {
        position: absolute;
        border-radius: 50%;
        left: 20%;
        width: 15%;
        height: auto;
        aspect-ratio: 1;
      }
    }

    .info {
      width: 100%;

      .info_header,
      .info_username {
        display: block;
        text-align: center;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .wrap {
    gap: 40px;
    .btn {
      width: 100%;
      max-width: unset;
    }

    .info_wrap {
      padding: 20px 0;
    }
  }
}
</style>
