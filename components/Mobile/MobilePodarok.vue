<template>
  <div id="podarok-list" class="block">
    <div class="uk-container uk-container-large">
      <h2 class="title">Список подарков</h2>
      <ul uk-accordion="multiple: true">
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Sushi-Studio</a>
          <div class="uk-accordion-content">
            <ul>
              <li v-for="(item, index) of sushi" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Ice People</a>
          <div class="uk-accordion-content">
            <ul>
              <li v-for="(item, index) of icepeople" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">TonyMoly</a>
          <div class="uk-accordion-content">
            <ul>
              <li v-for="(item, index) of tonymoly" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Арт Салон Красоты</a>
          <div class="uk-accordion-content">
            <ul>
              <li v-for="(item, index) of art" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MobilePodarok",
    data: () => ({
      sushi: [
        'Классический мисо-суп',
        'Мисо-суп с креветкой',
        'Мисо-суп с лососем',
        'Ролл «Сяке-Маки»',
        'Кальян в подарок в суши-баре',
        'Ролл «Банана эби»',
        'Набор «Самуи»',
        'Бесплатный бенто-ланч',
        'Дуо сет'
      ],
      art: [
        '10% скидка на маникюр',
        '10% скидка на педикюр',
        '10% скидка на стрижку + окрашивание',
        '20% скидка на стрижку',
        '25% скидка на аппаратную косметологию',
        'SPALight всего за 1000 ₽ час',
        '15% скидка на шугаринг',
        '15% скидка на депиляцию',
        'Диагностика на аппарате nioscope',
        'Профессиональный уход за волосами',
        '10% скидка на курсы академии АРТ по любым направлениям',
        '15% скидка на курсы академии АРТ по любым направлениям'
      ],
      tonymoly: [
        'Тканевые маски',
        'Филлеры для восстановления волос',
        'Пенки для умывания',
        '15% скидка на весь ассортимент',
        '20% скидка на весь ассортимент',
        'Карта любимого гостя с максимальной скидкой'
      ],
      icepeople: [
        'Взрослый билет',
        'Детский билет',
        'Скидка 10%',
        'Скидка 25%',
        'Скидка 50%',
        'Билет на 500 ₽',
        'Билет на 1000 ₽'
      ]
    })
  }
</script>

<style scoped lang="scss">
  .block {
    padding-top: 70px;

    .accordion-item {
      background: #FFFFFF;
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
  ul {
    li {
      list-style-type: none;
      font-weight: normal;
      line-height: 32px;
      text-align: left;
      padding-left: 20px;
      color: #18388B;

      ul li {
        list-style-type: disc;
      }

      span {
        color: #000000;
        font-size: 16px;
      }
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
