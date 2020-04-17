<template>
  <div class="card mb-2 p-1" v-if="show">
    <div class="card-header">
      <span class="card-title">{{ t.social && t.social.follow }}</span>
    </div>
    <div class="mt-1 text-center">
      <div class="box-social bg-blue" v-if="twitter">
        <a target="_blank" :href="twitter">
          <img class="image-twitter" :src="imageTwitter" alt="Twitter" />
        </a>
      </div>
      <div class="box-social bg-blue" v-if="linkedin">
        <a target="_blank" :href="linkedin">
          <img class="image-linkedin" :src="imageLinkedin" alt="Linkedin" />
        </a>
      </div>
      <div class="box-social bg-blue" v-if="github">
        <a target="_blank" :href="github">
          <img class="image-github" :src="imageGithub" alt="Github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import I18n from '@theme/mixins/I18n.js';
import imageGithub from '@theme/assets/img/github.svg';
import imageLinkedin from '@theme/assets/img/linkedin.svg';
import imageTwitter from '@theme/assets/img/twitter.svg';

export default {
  name: 'SocialBox',
  data: () => ({
    imageGithub,
    imageLinkedin,
    imageTwitter,
  }),
  mixins: [I18n],
  computed: {
    socialConfig() {
      return this.$themeConfig && this.$themeConfig.social;
    },
    twitter() {
      return this.socialConfig && this.socialConfig.twitter;
    },
    linkedin() {
      return this.socialConfig && this.socialConfig.linkedin;
    },
    github() {
      return this.socialConfig && this.socialConfig.github;
    },
    show() {
      return this.twitter || this.linkedin || this.github;
    },
  },
};
</script>
