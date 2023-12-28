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
        <h1 class="my-4 text-2xl font-semibold">New post</h1>
        <form class="" method="POST">
            <div class="text-black">
                <input
                    class="h-9 mb-6 px-4 appearance-none bg-[#d9d1ed] rounded-sm"
                    name="title"
                    type="text"
                    placeholder="Click here to set title"
                />
                <textarea
                    class="min-h-60 mb-6 px-4 py-2  appearance-none bg-[#d9d1ed] rounded-sm"
                    name="content"
                    placeholder="Type post content here"
                />
            </div>
            <button class="w-full p-2 bg-[#2e2742] text-[#d9d1ed] font-bold text-center hover:text-[#282236] hover:bg-[#d9d1ed] rounded-sm" type="submit">
                Post
            </button>
        </form>
    </div>
</div>
