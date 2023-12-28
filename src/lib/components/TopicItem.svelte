<script lang="ts">
    import moment from "moment";

    export let topic: any;

    let hovering = false;

    function handleOnMouseOver() {
        hovering = true;

        console.log(hovering);
    }

    function handleOnMouseOut() {
        hovering = false;
    }
</script>

<a href={`/forums/topics/${topic.topic_id}`}>
    <div class="relative flex w-full pl-7 py-2 bg-[#2e2742] hover:bg-[#d9d1ed] hover:text-[#282236] rounded-md">
        <div class="absolute left-0 top-0 h-full forum-item-stripe before:bg-green-400">
        </div>
        <div class="flex flex-1 items-center">
            <div class="flex-1">
                <div class="text-lg">
                    {topic.title}
                </div>
                <div class="text-xs">
                    by {topic.author.username}
                </div>
            </div>
            <div class="w-32">
                <div class="text-xs">
                    {topic.post_count} posts
                </div>
                <div class="text-xs">
                    {topic.view_count} views
                </div>
            </div>
            <div class="w-52">
                <div class="text-xs">
                    {#if topic.first_post.id !== topic.last_post.id}
                        last reply by{" "}
                        <span>{topic.last_post.author.username}</span>
                    {:else }
                        started by{" "}
                        <span>{topic.first_post.author.username}</span>
                    {/if}
                </div>
                <div class="text-xs">
                    {moment(topic.updated_at ?? topic.created_at).fromNow()}
                </div>
            </div>
        </div>

    </div>
</a>
