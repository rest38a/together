<template >
    <div >
        <Header />
        <Action />
        <WinCoupon v-if="!mobile" />
        <MobileWinCoupon v-else />
        <Podarok v-if="!mobile" />
        <MobilePodarok v-else />
        <Faq />
        <Footer />
        <Offcanvas />
    </div >
</template >

<script >
    import Header from "~/components/Header";
    import Action from "~/components/Action";
    import WinCoupon from "~/components/WinCoupon";
    import Podarok from "~/components/Podarok";
    import MobileWinCoupon from "~/components/Mobile/MobileWinCoupon";
    import MobilePodarok from "~/components/Mobile/MobilePodarok";
    import Faq from "~/components/Faq";
    import Footer from "~/components/Footer";
    import Offcanvas from "~/components/Offcanvas";

    export default {
        data: () => ({
            mobile: false
        }),
        components: {
            Header,
            Action,
            WinCoupon,
            MobileWinCoupon,
            Podarok,
            MobilePodarok,
            Faq,
            Footer,
            Offcanvas
        },
        head: {
            title: 'Мы Вместе Иркутск We are together',
            titleTemplate: 'Мы Вместе Иркутск We are together Иркутск',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
        },
        mounted() {
            const width = window.innerWidth;
            if (width < 576) {
                this.mobile = true
            } else {
                this.mobile = false
            }
        }
    }
</script >

<style >

</style >
