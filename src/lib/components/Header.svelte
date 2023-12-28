<script lang="ts">
    import { page } from "$app/stores";
    import { API_PUBLIC_URL } from "$lib/constants";

    export let user: any;

    const links: Array<{ title: string; path: string }> = [
        { title: "home", path: "/" },
        { title: "forums", path: "/forums" },
    ];
</script>

<div class="fixed left-0 top-0 w-full z-10 bg-[#3a3153]">
    <div class="hidden min-[792px]:flex justify-between items-center relative w-full max-w-7xl h-[70px] mx-auto px-20">
        <div class="flex items-center gap-x-16 select-none">
            <div>
                <a href="/">
                    <div class="p-2">
                        <div class="relative w-10 h-10">
                            <img
                                src="/assets/svgs/aim-cup-logo.svg"
                                alt="Aim Cup"
                                class="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <nav class="text-lg">
                    <ul class="flex gap-x-6">
                        {#each links as link (link.title)}
                            <li>
                                <a href={link.path}>
                                    <div
                                        class={"relative px-8 py-3 text-center hover:text-[#282236] hover:bg-[#d9d1ed] font-bold" +
                                        (`/${$page.url.pathname.split("/")[1]}` === link.path
                                            ? " bg-[#2e2742] text-[#d9d1ed]"
                                            : " bg-[#3a3153] text-[#d9d1ed]")}
                                    >
                                        {link.title}
                                    </div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>
        </div>
        <div class="flex items-center">
            {#if user}
                <div>
                    <a href="/auth/signout">
                        <div
                            class="relative flex items-center gap-x-3 px-3 py-2 text-[#d9d1ed] font-bold text-center"
                        >
                            <div class="relative w-full h-10 mx-auto rounded-full overflow-hidden">
                                <img
                                    src={user.avatar}
                                    alt="avatar"
                                    class="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                {user.username}
                            </div>
                        </div>
                    </a>
                </div>
            {:else }
                <div>
                    <a href="/auth/signin">
                        <div
                            class="relative px-8 py-3 bg-[#2e2742] text-[#d9d1ed] font-bold text-center hover:text-[#282236] hover:bg-[#d9d1ed] rounded-full"
                        >
                            login
                        </div>
                    </a>
                </div>
            {/if}
        </div>
    </div>
</div>
