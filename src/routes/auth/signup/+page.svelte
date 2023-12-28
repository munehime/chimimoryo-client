<svelte:head>
    <title>Sign in | Chimimoryo</title>
    <meta name="description" content="A" />
</svelte:head>

<div class="flex flex-col justify-center items-center w-full min-h-screen px-20 md:px-24 pt-20 pb-4">
    <div class="flex flex-col justify-center items-center gap-y-6 max-w-md my-auto">
        <form class="" method="POST">
            <h1 class="my-4 text-2xl text-center">Sign up into Chimimoryo</h1>
            <div class="text-black">
                <input
                    class="h-9 mb-6 px-4 appearance-none bg-[#d9d1ed] rounded-sm"
                    name="username"
                    type="text"
                    placeholder="username"
                />
                <input
                    class="h-9 mb-6 px-4 appearance-none bg-[#d9d1ed] rounded-sm"
                    name="email"
                    type="text"
                    placeholder="email"
                />
                <input
                    class="h-9 mb-6 px-4 appearance-none bg-[#d9d1ed] rounded-sm"
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </div>
            <button class="w-full p-2 bg-[#2e2742] text-[#d9d1ed] font-bold text-center hover:text-[#282236] hover:bg-[#d9d1ed] rounded-sm" type="submit">
                Sign up
            </button>
        </form>
        <div class="flex justify-end w-full">
            <div><a href="/auth/signin">Sign In</a></div>
        </div>
    </div>
</div>
