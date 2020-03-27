<template>
  <div uk-grid>
    <div class="uk-width-expand@m">
      <div class="text">
        Во всех суши барах и ресторанах<br> доставки Sushi Studio можно получить купон,<br> сделав заказ на сумму от 1500 ₽
      </div>
      <div class="uk-column-1-3@s address">
        <div
          v-for="(item, index) of address"
          :key="index"
          class="address-item"
        ><img src="../../assets/images/icon-map.svg">{{ item }}</div>
      </div>
      <ButtonOrderAndInstagram
        :text="'Заказать доставку'"
        :instagram="'sushistudio38'"
        :site="'https://irkutsk.sushi-studio.ru/'"
      />
    </div>
    <!--<div class="uk-width-auto@m uk-visible@m">
      <img src="../../assets/images/sushi-map.svg" alt="">
    </div>-->
  </div>
</template>

<script>
  import ButtonOrderAndInstagram from "~/components/ButtonOrderAndInstagram";

  export default {
    name: "Sushi",
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
    components: {
      ButtonOrderAndInstagram
    }
  }
</script>

<style scoped lang="scss">
  .text {
    font-family: "TT Norms", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 50px;
  }
  .address {
    .address-item {
      font-family: "TT Norms", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 32px;
      color: #000000;

      img {
        margin-right: 25px;
      }
    }
  }
</style>
