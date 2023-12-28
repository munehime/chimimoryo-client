import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
    cookies.delete("chimimoryo.session", { path: "/" });

    redirect(302, "/");
}
