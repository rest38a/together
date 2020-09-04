<template>
  <div id="podarok" class="block">
    <div class="uk-container uk-container-large">
      <h2 class="title">Получить свой<br> беспроигрышный купон можно</h2>
      <ul uk-accordion="multiple: true">
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Sushi-Studio</a>
          <div class="uk-accordion-content">
            <div class="text">
              Во всех суши барах и ресторанах<br> доставки Sushi Studio можно получить купон,<br> сделав заказ на сумму от 1500 ₽
            </div>
            <div class="uk-column-1-2@s address">
              <div
                v-for="(item, index) of address"
                :key="index"
                class="address-item"
              ><img src="../../assets/images/icon-map.svg">{{ item }}</div>
            </div>
            <a class="button" @click="clickSite('https://irkutsk.sushi-studio.ru/')">
              <img src="../../assets/images/corner-left.svg" class="corner-left">
              <img src="../../assets/images/corner-right.svg" class="corner-right">
              Заказать доставку
            </a>
            <div @click="clickSite('https://instagram.com/sushistudio38')" class="instagram-wrap">
              <img src="../../assets/images/action-instagram.svg">
              <span class="order-text">sushistudio38</span>
            </div>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Ice People</a>
          <div class="uk-accordion-content">
            <div class="text">
              Скретч-карта будет выдаваться каждому посетителю:
            </div>
            <div class="uk-column-1-2@s address">
              <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Сергеева, 3/1А</div>
            </div>
            <a class="button" @click="clickSite('http://icepeople38.ru/')">
              <img src="../../assets/images/corner-left.svg" class="corner-left">
              <img src="../../assets/images/corner-right.svg" class="corner-right">
              Перейти на сайт
            </a>
            <div @click="clickSite('https://instagram.com/icepeople.irk')" class="instagram-wrap">
              <img src="../../assets/images/action-instagram.svg">
              <span class="order-text">icepeople.irk</span>
            </div>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">TonyMoly</a>
          <div class="uk-accordion-content">
            <div class="text">
              Во всех магазинах Tony Moly при покупке на сумму от 1000 ₽:
            </div>
            <div class="uk-column-1-1@s address">
              <div class="address-item">
                <div><img src="../../assets/images/icon-map.svg"></div>
                <div>ТРК «Ярко Молл», Верхняя набережная, 10 (1 этаж)</div>
              </div>
              <div class="address-item">
                <div class="address-item__img"><img src="../../assets/images/icon-map.svg"></div>
                <div class="address-item__text">ТРК «Модный Квартал», ул. 3 Июля, 25 (1 этаж)</div>
              </div>
            </div>
            <a class="button" @click="clickSite('http://dicards.ru/tonymoly.html')">
              <img src="../../assets/images/corner-left.svg" class="corner-left">
              <img src="../../assets/images/corner-right.svg" class="corner-right">
              Перейти на сайт
            </a>
            <div @click="clickSite('https://instagram.com/tonymoly_irkutsk')" class="instagram-wrap">
              <img src="../../assets/images/action-instagram.svg">
              <span class="order-text">tonymoly_irkutsk</span>
            </div>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Арт Салон Красоты</a>
          <div class="uk-accordion-content">
            <div class="text">
              Во всех салонах красоты «Арт-салон» при чеке от 2000 ₽:
            </div>
            <div class="uk-column-1-1@s address">
              <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Киевская, 18</div>
              <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Горького, 15</div>
              <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Маршала Жукова, 13/3</div>
            </div>
            <a class="button" @click="clickSite('http://www.artirk.ru/')">
              <img src="../../assets/images/corner-left.svg" class="corner-left">
              <img src="../../assets/images/corner-right.svg" class="corner-right">
              Перейти на сайт
            </a>
            <div @click="clickSite('https://instagram.com/art_salon_irkutsk')" class="instagram-wrap">
              <img src="../../assets/images/action-instagram.svg">
              <span class="order-text">art_salon_irkutsk</span>
            </div>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Bee Happy</a>
          <div class="uk-accordion-content">
            <div class="text">
              В доставке и ресторане Bee Happy при чеке от 500 ₽:
            </div>
            <div class="uk-column-1-1@s address">
              <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Партизанская, 28</div>
            </div>
            <a class="button" @click="clickSite('https://beehappypizza.ru/')">
              <img src="../../assets/images/corner-left.svg" class="corner-left">
              <img src="../../assets/images/corner-right.svg" class="corner-right">
              Перейти на сайт
            </a>
            <div @click="clickSite('https://instagram.com/beehappy_pizza')" class="instagram-wrap">
              <img src="../../assets/images/action-instagram.svg">
              <span class="order-text">beehappy_pizza</span>
            </div>
          </div>
          <hr>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MobileWinCoupon",
    data: () => ({
      address: [
        'ул. Байкальская, 23/1',
        'ул. Карла Маркса, 18',
        'ул. Ядринцева, 8А',
        'ул. Седова, 18',
        'ул. Рябикова, 32В',
        'ТЦ «Юбилейный»',
        'ул. Розы Люксембург, 39',
        'ул. Лермонтова, 275/15',
        'ул. Терешковой, 6А'
      ]
    }),
    methods: {
      clickSite (href) {
        location.href = href
      },
      handleClick () {
        location.href = 'https://instagram.com/sushistudio38/'
      }
    }
  }
</script>

<style scoped lang="scss">
  .text {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
  .address {
    padding: 30px 0;
  }
  .address-item {
    display: flex;
    font-size: 14px;
    line-height: 26px;
    color: #000000;

    img {
      margin-right: 15px;
    }
  }
  .button {
    display: inline-block;
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
  .instagram-wrap {
    cursor: pointer;
    margin-top: 30px;

    .order-text {
      font-size: 16px;
      line-height: 19px;
      color: #9BA1AD;
      margin-left: 15px;
    }
  }
  .block {
    padding-top: 70px;

    .accordion-item {
      background: #FFFFFF;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      padding: 30px 37px;
      max-width: 912px;
    }

    .uk-open .uk-accordion-title{
      font-weight: bold;
      color: #EC0343;
    }

    .uk-accordion-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #000;
    }
    .uk-accordion-content {
      margin-top: 35px;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }

    .uk-accordion-title::before {
      background-image: url("../../assets/images/down-arrow.svg");
    }

    .uk-open > .uk-accordion-title::before {
      background-image: url("../../assets/images/down-arrow.svg");
      animation: rotation 500ms ease-in-out forwards;
    }

    @keyframes rotation {
      0% {
        transform:rotate(0deg);
      }
      100% {
        transform:rotate(180deg)
      }
    }
    hr {
      display: none;
    }
  }
  @media (max-width: 576px) {
    .block {
      .accordion-item {
        padding: 0;
        box-shadow: none;
      }
      .uk-accordion-title {
        font-size: 18px;
        line-height: 21px;
      }
      .uk-accordion-content {
        font-size: 14px;
        line-height: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      hr {
        display: block;
      }
    }
  }
</style>
