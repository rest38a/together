<template>
  <div id="podarok-list" class="block">
    <div class="uk-container uk-container-large">
      <h2 class="title">Список подарков</h2>
      <div class="uk-grid-small uk-child-width-1-4@s uk-text-center" uk-grid>
        <div>
          <div class="podarok-block">
            <div class="img-wrap">
              <img src="../assets/images/icon-big-sushi.svg">
            </div>
            <ul>
              <li v-for="(item, index) of sushi" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="podarok-block">
            <div class="img-wrap">
              <img src="../assets/images/icon-big-art.svg">
            </div>
            <ul>
              <li v-for="(item, index) of art" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="podarok-block">
            <div class="img-wrap">
              <img src="../assets/images/icon-big-tonymoly.svg">
            </div>
            <ul>
              <li v-for="(item, index) of tonymoly" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="podarok-block">
            <div class="img-wrap">
              <img src="../assets/images/icon-big-icepeople.svg">
            </div>
            <ul>
              <li v-for="(item, index) of icepeople" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="podarok-block">
            <div class="img-wrap">
              <img src="../assets/images/icon-big-beehappy.svg">
            </div>
            <ul>
              <li v-for="(item, index) of beehappy" :key="index"><span>{{ item }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Podarok",
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
      ],
      beehappy: [
        'Паста помадоро',
        'Цезарь с цыплёнком салат',
        'Пицца Маргарита',
        'Комбо 900₽',
        'Фокачча с песто и пармезаном',
        'Фокачча с розмарином',        
      ],
    })
  }
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 115px;
  }
  .img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 171px;
    margin-bottom: 50px;
  }
  ul {
    li {
      font-weight: normal;
      line-height: 32px;
      text-align: left;
      padding-left: 20px;
      color: #18388B;

      span {
        color: #000000;
        font-size: 16px;
      }
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    .uk-child-width-1-4\@s > * {
      width: 50%;
    }
  }
  @media (max-width: 576px) {
    .block {
      margin-top: 50px;
    }
  }
</style>
