<script lang="ts">
    import ForumItem from "@components/ForumItem.svelte";

    export let data;
</script>

<svelte:head>
    <title>Top Relax Player 2023 - Aim Cup</title>
    <meta name="description" content="A" />
</svelte:head>

<div class="w-full max-w-8xl min-h-screen mx-auto px-20 md:px-24 pt-[70px] pb-16">
    <div class="flex flex-col justify-center gap-y-2 pt-20">
        {#each data.forums as category (category.category)}
            <div class="">
                <div>
                    <h2 class="text-3xl font-bold">
                        {category.category}
                    </h2>
                </div>
                <ul class="flex flex-col gap-y-1 mt-2">
                    <li>
                        <div class="flex flex-1 items-center w-full pl-7 py-0.5">
                            <div class="flex flex-1 text-xs">
                                Forums
                            </div>
                            <div class="w-80 text-xs">
                                Latest Post
                            </div>
                        </div>
                    </li>
                    {#each category.forums as forum (forum.title.id)}
                        <li>
                            <ForumItem forum={forum} />
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>
