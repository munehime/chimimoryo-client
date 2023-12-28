<script lang="ts">
    import {sineIn, sineOut} from "svelte/easing";
    import {fly} from "svelte/transition";
    import {afterNavigate, disableScrollHandling} from "$app/navigation";
    import Header from "@components/Header.svelte";
    import "../styles/app.css";

    export let data;

    afterNavigate(() => {
        disableScrollHandling();
        setTimeout(() => {
            scrollTo({top: 0, behavior: "instant"});
        }, 300);
    });
</script>

<div class="overflow-hidden scroll-smooth">
    <Header user={data.user}/>
    {#key data.url}
        <main
            in:fly={{ x:-200, duration: 300, delay: 300, easing: sineOut }}
            out:fly={{ x:200,duration: 300, easing: sineIn }}
        >
            <slot/>
        </main>
    {/key}
</div>

<style lang="postcss">
    :global(body) {
        background-image: url("/assets/images/aim-cup-3-background-vertical.png");
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #282236;
        color: #d9d1ed;
    }
</style>
