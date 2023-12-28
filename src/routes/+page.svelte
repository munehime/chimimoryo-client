<script lang="ts">
    import Icon from "@iconify/svelte";
    import twitterFill from "@iconify/icons-ri/twitter-fill";
    import discordFill from "@iconify/icons-ri/discord-fill";

    export let data: any;
</script>

<svelte:head>
    <title>Chimimoryo</title>
    <meta name="description" content="A"/>
</svelte:head>

<div class="flex flex-col justify-end items-center w-full min-h-screen px-20 md:px-24 pt-20 pb-4">
    <div class="flex flex-col justify-center items-center gap-y-20 my-auto">
        <div>
            <div class="relative w-full h-36 mx-auto">
                <img
                        src="/assets/images/top-relax-player-2023-logo.png"
                        alt="logo"
                        class="w-full h-full object-contain"
                />
            </div>
        </div>
        <div class="flex flex-col justify-center gap-y-8 text-center">
            <div>
                <div class="text-[#eb9191] text-xl italic tracking-widest">
                    Chimimoryo
                </div>
            </div>
        </div>
    </div>
</div>
