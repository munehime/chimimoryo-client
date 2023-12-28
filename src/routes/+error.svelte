<script lang="ts">
    import {page} from "$app/stores";

    const onLine = typeof navigator !== "undefined" ? navigator.onLine : true;
</script>

<svelte:head>
    <title>{$page.status} | Error</title>
</svelte:head>

<div class="flex flex-grow justify-center items-center min-h-screen">
    <div class="text-center">
        {#if onLine}
            {#if $page.status === 404}
                <h1 class="text-8xl font-bold">404</h1>
                <div>
                    <h2 class="text-lg">What are you doing here...?</h2>
                    <p class="text-sm"><a href="/">Click here to return to home page</a></p>
                </div>
            {:else}
                <h1 class="text-8xl font-bold">500</h1>
                <div>
                    <h2 class="text-lg">Something went wrong...</h2>
                    <p class="text-sm"><a href="/">Click here to return to home page</a></p>
                </div>
            {/if}
        {:else}
            <h1 class="text-3xl font-bold">It looks like you're offline</h1>
            <h2 class="text-lg">Reload the page once you've found the internet.</h2>
        {/if}
    </div>
</div>
