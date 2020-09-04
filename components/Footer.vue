<template>
    <div class="footer-bg">
      <div class="uk-container uk-container-large footer">
        <div class="footer-item" @click="handleClick('https://www.instagram.com/sushistudio38')">
          <div class="footer-block">
            <div class="footer-block__icon"><img src="../assets/images/footer-sushi.svg" alt=""></div>
            <div class="footer-block__text"><img src="../assets/images/icon-instagram.svg" alt=""> sushistudio38</div>
          </div>
        </div>
        <div class="footer-item" @click="handleClick('https://www.instagram.com/art_salon_irkutsk')">
          <div class="footer-block">
            <div class="footer-block__icon"><img src="../assets/images/footer-art.svg" alt=""></div>
            <div class="footer-block__text"><img src="../assets/images/icon-instagram.svg" alt=""> art_salon_irkutsk</div>
          </div>
        </div>
        <div class="footer-item" @click="handleClick('https://www.instagram.com/icepeople.irk')">
          <div class="footer-block">
            <div class="footer-block__icon"><img src="../assets/images/footer-ice.svg" alt=""></div>
            <div class="footer-block__text"><img src="../assets/images/icon-instagram.svg" alt=""> icepeople.irk</div>
          </div>
        </div>
        <div class="footer-item" @click="handleClick('https://www.instagram.com/tonymoly_irkutsk')">
          <div class="footer-block">
            <div class="footer-block__icon"><img src="../assets/images/footer-tony.svg" alt=""></div>
            <div class="footer-block__text"><img src="../assets/images/icon-instagram.svg" alt=""> tonymoly_irkutsk</div>
          </div>
        </div>
        <div class="footer-item" @click="handleClick('https://www.instagram.com/beehappy_pizza')">
          <div class="footer-block">
            <div class="footer-block__icon"><img src="../assets/images/footer-beehappy.svg" alt=""></div>
            <div class="footer-block__text"><img src="../assets/images/icon-instagram.svg" alt=""> beehappy_pizza</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Footer",
    methods: {
      handleClick (href) {
        location.href = href
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-bg {
    background-color: #EC0343;

    .footer {
      display: flex;
      justify-content: space-evenly;
      padding: 43px 0;
      color: #fff;

      .footer-item {
        cursor: pointer;
      }

      img {
        margin-right: 10px;
      }

      .footer-block {
        display: flex;

        .footer-block__icon {
          display: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .footer-bg {
      .footer {
        flex-direction: column;

        .footer-item {
          margin-bottom: 7px;

          .footer-block {
            display: flex;
            justify-content: space-around;

            div {
              width: 50%;
            }

            .footer-block__icon {
              display: block;
              width: 30%;
              padding-left: 30px;
              text-align: center;
            }
            .footer-block__text {
              width: 70%;
              font-size: 16px;
              line-height: 19px;
            }
          }
        }
      }
    }
  }
</style>
