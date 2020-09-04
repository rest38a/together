<template>
  <div uk-grid>
    <div class="uk-width-expand@m">
      <div class="text">
        В доставке и ресторане Bee Happy при чеке от 500 ₽:
      </div>
      <div class="uk-column-1-1@s address">
        <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Партизанская, 28</div>
      </div>
      <ButtonOrderAndInstagram
        :text="'Перейти на сайт'"
        :instagram="'beehappy_pizza'"
        :site="'https://beehappypizza.ru/'"
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
    name: "Beehappy",
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
