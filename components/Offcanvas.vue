<template>
  <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <li><a href="#action" class="menu-a">Об акции</a></li>
        <li><a href="#podarok" class="menu-a">Как получить подарок?</a></li>
        <li><a href="#podarok-list" class="menu-a">Список подарков</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Offcanvas"
  }
</script>

<style scoped lang="scss">
  .menu-a {
    color: #fff!important;
  }
</style>
