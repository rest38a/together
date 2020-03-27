<template>
  <div id="action" class="block">
    <div class="uk-container uk-container-large">
      <div uk-grid>
        <div class="uk-width-expand@m uk-flex-last uk-flex-first@xl">
          <h2 class="title">Об акции</h2>
          <h3>Один из 50.000 тысяч подарков может стать твоим!</h3>
          <p>
            Участвуй в акции WE ARE TOGETHER соверши покупку в ресторанах доставки или суши-барах сети Sushi Studio
            <span class="instagram">@sushisudio38</span>, салонах красоты "Арт" <span class="instagram">@art_salon_irkutsk</span>, магазинах корейской косметики "TONY MOLY"
            <span class="instagram">@tonymoly_irkutsk</span> или приходи на Ледовый крытый каток Ice People <span class="instagram">@icepeople.irk</span> получи свой победный купон,
            сотри защитный слой, и будь готов забрать свой подарок.
          </p>
          <p class="time">Кол-во подарков ограничено, акция действует до <strong>30.05.2020</strong> года.</p>
        </div>
        <div class="uk-width-auto@m action-image uk-flex-first uk-flex-last@xl">
          <img src="../assets/images/action.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Action"
    }
</script>

<style scoped lang="scss">
  h3 {
    font-family: "TT Norms", sans-serif;
    font-weight: bold;
    font-size: 30px;
    color: #000;
    margin-bottom: 50px;
  }
  p {
    font-family: "TT Norms", sans-serif;
    font-size: 22px;
    line-height: 40px;
    color: #000;
  }
  .time {
    margin-top: 50px;
  }
  .instagram {
    color: #F40041;
    font-weight: bold;
  }
  @media (max-width: 576px) {
    .block {
      padding-top: 70px;
      margin-top: 2px;

      .title {
        margin-bottom: 0;
      }
      h3 {
        font-size: 17px;
        line-height: 20px;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
      .time {
        margin-top: 20px;
      }
      .action-image img {
        margin-bottom: 20px;
      }
    }
  }
</style>
