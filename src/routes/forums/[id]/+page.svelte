<script lang="ts">
    import TopicItem from "@components/TopicItem.svelte";

    export let data;
</script>

<svelte:head>
    <title>Top Relax Player 2023 - Aim Cup</title>
    <meta name="description" content="A" />
</svelte:head>

<div class="w-full max-w-8xl min-h-screen mx-auto px-20 md:px-24 pt-[70px] pb-16">
    <div class="flex flex-col justify-center gap-y-2 pt-20">
        <a class="" href={`/forums/${data.forum_id}/topics/create`}>
            <div
                class="relative inline px-8 py-3 text-center text-[#282236] bg-[#d9d1ed] font-bold hover:opacity-80 rounded-md"
            >
                New topic
            </div>
        </a>
        <ul class="flex flex-col gap-y-1 mt-4">
            {#each data.topics as topic (topic.topic_id)}
                <li>
                    <TopicItem topic={topic} />
                </li>
            {/each}
        </ul>
    </div>
</div>
