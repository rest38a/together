<template>
  <div uk-grid>
    <div class="uk-width-expand@m">
      <div class="text">
        Скретч-карта будет выдаваться каждому посетителю:
      </div>
      <div class="uk-column-1-2@s address">
        <div class="address-item"><img src="../../assets/images/icon-map.svg">ул. Сергеева, 3/1А</div>
      </div>
      <ButtonOrderAndInstagram
        :text="'Перейти на сайт'"
        :instagram="'icepeople.irk'"
        :site="'http://icepeople38.ru/'"
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
    name: "Ice",
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
