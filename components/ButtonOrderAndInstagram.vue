<template>
  <div class="order" uk-grid>
    <div>
      <a class="button" @click="handleButton">
        <img src="../assets/images/corner-left.svg" class="corner-left">
        <img src="../assets/images/corner-right.svg" class="corner-right">
        {{ text }}
      </a>
    </div>
    <div>
      <div @click="handleClick" class="instagram-wrap">
        <img src="../assets/images/action-instagram.svg">
        <span class="order-text">{{ instagram }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ButtonOrderAndInstagram",
    props: {
      text: {
        type: String,
        required: true
      },
      instagram: {
        type: String,
        required: true
      },
      site: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick () {
        location.href = `https://instagram.com/${this.instagram}`
      },
      handleButton () {
        location.href = this.site
      }
    }
  }
</script>

<style scoped lang="scss">
  .order {
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    color: #9BA1AD;
    margin-top: 95px;

    .button {
      border: 2px solid #FCABC1;
      padding: 17px 36px;
      box-sizing: border-box;
      box-shadow: 0px 15px 40px rgba(236, 3, 67, 0.14);
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      color: #EC0343;
      position: relative;

      .corner-left {
        position: absolute;
        bottom: -3px;
        left: -3px;
        margin: 0;
      }
      .corner-right {
        position: absolute;
        right: -3px;
        top: -3px;
        margin: 0;
      }
    }

    img {
      margin-right: 20px;
    }

    .instagram-wrap {
      cursor: pointer;
    }
  }
</style>
