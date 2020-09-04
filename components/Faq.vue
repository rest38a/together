<template>
  <div id="faq" class="block">
    <div class="uk-container uk-container-large">
      <h2 class="title">FAQ</h2>
      <ul uk-accordion="multiple: true">
        <li class="accordion-item uk-open">
          <a class="uk-accordion-title" href="#">Сколько у меня есть времени для получения подарка?</a>
          <div class="uk-accordion-content">
            <p>Акция действует до 30.05.2020 подарки будут выдаваться по подарочным купонам до 30.11.2020</p>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Как и где мне получить купон?</a>
          <div class="uk-accordion-content">
            <p>SUSHI STUDIO - в любом суши-баре сети или в ресторане доставке совершим покупку на сумму от 1500 рублей.</p>
            <p>Bee Happy - при заказе от 500 рублей.</p>
            <p>ICE People -.При посещении крытого катка ICE People.</p>
            <p>Art салон - совершим покупку от 2000 рублей в любом из салонов красоты сети.</p>
            <p>Салон корейской косметики TONYMOLY - в любом магазине сети от 1000 рублей.</p>
          </div>
          <hr>
        </li>
        <li class="accordion-item">
          <a class="uk-accordion-title" href="#">Где и как я могу и как получить свой подарок?</a>
          <div class="uk-accordion-content">
            <p>SUSHI STUDIO - Подарки можно получить в любом из суши-баров или в ресторане доставки обратившись к официанту или оператору, заранее сообщим о наличии подарочного купона. Подарок в ресторане доставке можно получить самовывозом или дополнительно к заказу доставкой на минимальную сумму бесплатной доставки.</p>
            <p>Bee Happy - при заказе в пиццерии или доставке при чеке от 500 рублей.</p>
            <p>ICE People - на самом крытом катке ICE People, показав подарочный купон администратору. Прокат коньков оплачивается отдельно. Так же сертификат на сумму 500 и 1000 рублей можно использовать многоразово до истечения лимита сертификата.</p>
            <p>Art - салон красоты - в любом салоне сети, предварительн осообщим администратору о наличии сертифката.</p>
            <p>Салон корейской косметики TONYMOLY - в любом магазине сети.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Faq"
  }
</script>

<style scoped lang="scss">
  .block {
    margin-bottom: 50px;

    .accordion-item {
      background: #FFFFFF;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      padding: 30px 37px;
      max-width: 912px;
    }

    .uk-accordion-title {
      font-size: 24px;
      line-height: 28px;
      color: #EC0343;
    }
    .uk-accordion-content {
      margin-top: 35px;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }

    .uk-accordion-title::before {
      background-image: url("../assets/images/down-arrow.svg");
    }

    .uk-open > .uk-accordion-title::before {
      background-image: url("../assets/images/down-arrow.svg");
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
      padding-top: 70px;

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
