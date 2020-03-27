<template>
  <div id="podarok" class="block">
    <div class="uk-container uk-container-large">
      <h2 class="title">Получить свой<br> беспроигрышный купон можно</h2>
      <ul class="wrap-tab uk-tab">
        <li
          v-for="(tab, index) of tabs"
          :key="index"
          :class="{ 'uk-active': currentComponent === tab.component }"
          @click="setTab(tab.component)"
        ><a class="tab-a">{{ tab.title }}</a></li>
      </ul>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
  import Sushi from '~/components/tab/Sushi';
  import Ice from '~/components/tab/Ice';
  import Tony from '~/components/tab/Tony';
  import Art from '~/components/tab/Art';

  export default {
    name: "WinCoupon",
    data: () => ({
      tabs: [
        { title: 'Sushi-Studio', component: 'Sushi' },
        { title: 'Ice People', component: 'Ice' },
        { title: 'TonyMoly', component: 'Tony' },
        { title: 'Арт Салон Красоты', component: 'Art' },
      ],
      currentComponent: 'Sushi'
    }),
    components: {
        Sushi, Ice, Tony, Art
    },
    methods: {
      setTab (component) {
        this.currentComponent = component
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 80px;
  }
  .tab-a {
    font-family: "TT Norms", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #BABABA;
    text-transform: unset;
    border-bottom: 2px solid transparent;
  }
  .uk-active a {
    color: #E9406E;
    font-weight: bold;
    border-color: #E9406E;
  }
  .wrap-tab {
    margin-bottom: 50px;
  }
  @media (max-width: 576px) {
    .block {
      margin-top: 35px;
    }
  }
</style>
