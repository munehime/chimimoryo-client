<script lang="ts">
    import moment from "moment";

    export let forum: any;

    let hovering = false;

    function handleOnMouseOver() {
        hovering = true;

        console.log(hovering);
    }

    function handleOnMouseOut() {
        hovering = false;
    }
</script>

<a href={`/forums/${forum.forum_id}`}>
    <div
        class="relative flex w-full pl-7 py-2 bg-[#2e2742] hover:bg-[#d9d1ed] hover:text-[#282236] rounded-md"
        on:mouseover={handleOnMouseOver}
        on:mouseout={handleOnMouseOut}
    >
        <div class="absolute left-0 top-0 h-full forum-item-stripe before:bg-green-400">
        </div>
        <div class="flex flex-1 items-center">
            <div class="flex-1">
                <div class="text-lg">
                    {forum.title}
                </div>
                <div class="text-xs">
                    {forum.description}
                </div>
            </div>
            <div class="w-80">
                <div class="text-lg">
                    {(forum.latest_post?.id !== forum.latest_post?.topic?.first_post ? "Re: " : "") + forum.latest_post?.topic?.title}
                </div>
                <div class="text-xs">
                    {moment(forum.latest_post?.created_at ?? Date.now()).fromNow()}
                    {#if forum.latest_post?.author}
                        {" "}by {forum.latest_post?.author.username}
                    {/if}
                </div>
            </div>
        </div>
    </div>
</a>
