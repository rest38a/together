<template>
  <div uk-grid>
    <div class="uk-width-expand@m">
      <div class="text">
        Во всех магазинах Tony Moly при покупке на сумму от 1000 ₽:
      </div>
      <div class="uk-column-1-1@s address">
        <div class="address-item"><img src="../../assets/images/icon-map.svg">ТРК «Ярко Молл», Верхняя набережная, 10 (1 этаж)</div>
        <div class="address-item"><img src="../../assets/images/icon-map.svg">ТРК «Модный Квартал», ул. 3 Июля, 25 (1 этаж)</div>
      </div>
      <ButtonOrderAndInstagram
        :text="'Перейти на сайт'"
        :instagram="'tonymoly_irkutsk'"
        :site="'http://dicards.ru/tonymoly.html'"
      />
    </div>
    <!--<div class="uk-width-auto@m">
      <img src="../../assets/images/sushi-map.svg" alt="">
    </div>-->
  </div>
</template>

<script>
  import ButtonOrderAndInstagram from "~/components/ButtonOrderAndInstagram";

  export default {
    name: "Tony",
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
