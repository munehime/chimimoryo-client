import { type Actions, redirect } from "@sveltejs/kit";
import { API_PUBLIC_URL } from "$lib/constants";

export async function load({ params }) {
    return {
        forum_id: params.id,
    };
}

export const actions: Actions = {
    default: async ({ cookies, request, params }) => {
        const data = await request.formData();
        const title = data.get("title");
        const content = data.get("content");

        const accessToken = cookies.get("chimimoryo.session");

        const response = await fetch(`${API_PUBLIC_URL}/forums/${params.id}/topics`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, content,
            }),
        });

        if (!response.ok) {
            return;
        }

        redirect(302, `/forums/${params.id}`);
    },
};
