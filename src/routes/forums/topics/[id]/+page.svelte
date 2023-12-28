<script lang="ts">
    import moment from "moment";

    export let data;
</script>

<svelte:head>
    <title>Top Relax Player 2023 - Aim Cup</title>
    <meta name="description" content="A" />
</svelte:head>

<div class="w-full max-w-8xl min-h-screen mx-auto px-20 md:px-24 pt-[70px] pb-16">
    <div class="flex flex-col justify-center gap-y-2 pt-20">
        <div class="flex justify-between px-8">
            <div>
                <h1 class="text-2xl font-semibold">{data.topic.title}</h1>
                <div class="text-xs">{moment(data.topic.created_at).fromNow()}</div>
            </div>
            <div>
                <div class="text-xs">Total Posts</div>
                <div class="text-2xl font-semibold">{data.topic.post_count}</div>
            </div>
        </div>
        <ul class="flex flex-col gap-y-2 mt-4">
            {#each data.posts as post (post.post_id)}
                <li>
                    <div class="flex gap-x-8 px-8 py-4 bg-[#2e2742]">
                        <div>
                            <div>
                                <div class="relative w-20 h-20 rounded-xl overflow-hidden">
                                    <img
                                        src={post.author.avatar}
                                        alt="Aim Cup"
                                        class="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div class="font-semibold">
                                {post.author.username}
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center gap-x-2">
                                {#if post.author.id === data.topic.author}
                                    <div
                                        class="px-2 p-0.5 rounded-full text-xs font-semibold text-green-400 uppercase bg-black/75">
                                        Topic Starter
                                    </div>
                                {/if}
                                <div class="text-xs">
                                    {moment(post.created_at).fromNow()}
                                </div>
                            </div>
                            <div>
                                {post.content}
                            </div>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
        <hr class="w-full mt-8 border-b-2" />
        <div class="mt-4">
            <h2 class="px-3 py-2 text-lg font-semibold">Your reply</h2>
            <form class="" method="POST">
                <div class="text-black">
                <textarea
                    class="min-h-60 mb-6 px-4 py-2  appearance-none bg-[#d9d1ed] rounded-sm"
                    name="content"
                    placeholder="Type post content here"
                />
                </div>
                <button
                    class="px-8 py-2  bg-[#2e2742] text-[#d9d1ed] font-bold text-center hover:text-[#282236] hover:bg-[#d9d1ed] rounded-sm"
                    type="submit">
                    Reply
                </button>
            </form>
        </div>
    </div>
</div>
