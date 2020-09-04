<template>
  <div class="header-bg" id="header">
    <div uk-sticky="top: #header; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent">
      <div class="uk-container uk-container-large">
        <nav uk-navbar>
          <div class="mobile-menu" uk-toggle="target: #offcanvas-reveal">
            <svg width="28" height="13" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="2" rx="1" fill="white"/>
              <rect y="9" width="28" height="2" rx="1" fill="white"/>
            </svg>
            <div>Меню</div>
          </div>
          <div class="uk-navbar-left uk-visible@s">
            <img src="../assets/images/logo.svg" alt="">
          </div>
          <div class="uk-navbar-center uk-visible@s">
            <ul class="uk-navbar-nav menu">
              <li><a href="#action" class="menu-a">Об акции</a></li>
              <li><a href="#podarok" class="menu-a">Как получить подарок?</a></li>
              <li><a href="#podarok-list" class="menu-a">Список подарков</a></li>
            </ul>
          </div>
          <div class="uk-navbar-right faq"><a href="#faq" class="menu-faq">FAQ</a></div>
        </nav>
      </div>
    </div>
    <div class="uk-container uk-container-large">
      <div class="slide">
        <img src="../assets/images/slide.svg" alt="">
      </div>
      <div class="social">
        <div class="social-item" @click="handleClick('https://www.instagram.com/sushistudio38')">
          <div class="social-img"><img src="../assets/images/icon-sushi.svg" alt=""></div>
          <div class="social-text uk-visible@s">
            <img src="../assets/images/icon-instagram.svg" alt=""> sushistudio38
          </div>
        </div>
        <div class="social-item" @click="handleClick('https://www.instagram.com/icepeople.irk')">
          <div class="social-img"><img src="../assets/images/icon-icepeople.svg" alt=""></div>
          <div class="social-text uk-visible@s">
            <img src="../assets/images/icon-instagram.svg" alt=""> icepeople.irk
          </div>
        </div>
        <div class="social-item" @click="handleClick('https://www.instagram.com/art_salon_irkutsk')">
          <div class="social-img"><img src="../assets/images/icon-art.svg" alt=""></div>
          <div class="social-text uk-visible@s">
            <img src="../assets/images/icon-instagram.svg" alt=""> art_salon_irkutsk
          </div>
        </div>
        <div class="social-item" @click="handleClick('https://www.instagram.com/tonymoly_irkutsk')">
          <div class="social-img"><img src="../assets/images/icon-tonymoly.svg" alt=""></div>
          <div class="social-text social-tonymoly-text uk-visible@s">
            <img src="../assets/images/icon-instagram.svg" alt=""> tonymoly_irkutsk
          </div>
        </div>
        <div class="social-item" @click="handleClick('https://www.instagram.com/beehappy_pizza')">
          <div class="social-img"><img src="../assets/images/icon-beehappy.svg" alt=""></div>
          <div class="social-text uk-visible@s">
            <img src="../assets/images/icon-instagram.svg" alt=""> beehappy_pizza
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      handleClick (href) {
        location.href = href
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-bg {
    background: radial-gradient(50% 50% at 50% 50%, #E9406E 0%, #EC0343 100%);
    padding-bottom: 30px;
    padding-top: 40px;
  }
  .menu li a {
    font-family: "TT Norms", sans-serif;
    font-size: 18px;
    line-height: 21px;
    text-transform: unset;
    color: #FFFFFF;
  }
  .uk-navbar-sticky {
    background: radial-gradient(50% 50% at 50% 50%, #E9406E 0%, #EC0343 100%);
    padding: 15px 0;
  }
  .faq {
    font-family: "TT Norms", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
  }
  .menu-a {
    padding: 0 35px;
  }
  .menu-faq {
    color: #fff;
  }
  .slide {
    padding-top: 80px;
    padding-bottom: 95px;
    text-align: center;
  }
  .social {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }
  .social-item {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    padding: 0 50px;
    cursor: pointer;
  }
  .social-text {
    font-family: "TT Norms", sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: 'liga' off;
    margin-top: 40px;
    color: #FFFFFF;
  }
  .social-tonymoly-text {
    margin-top: 65px;
  }
  .social-text img {
    margin-right: 7px;
  }
  .mobile-menu {
    display: none;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 30px;

    div {
      padding: 0 0 0 10px;
    }
  }

  @media (max-width: 1263px) {
    .social {
      margin-top: -40px;
    }
    .social-item {
      padding-top: 40px;
    }
  }

  @media (max-width: 1080px) {
    .mobile-menu {
      display: flex;
      align-items: center;
    }
    .social {
      .social-item {
        align-self: center;
      }
    }
    .uk-navbar-center  {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .header-bg {
      padding: 20px 0 50px;
    }
    .slide {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .social {
      margin-top: 0;
      .social-item {
        padding-left: 0;
        padding-right: 0;
        margin-right: 25px;
      }
      .social-item:last-child {
        margin: 0;
      }
    }
    .uk-accordion  {
      display: none!important;
    }
  }
</style>
