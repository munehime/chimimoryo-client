import { API_PUBLIC_URL } from "$lib/constants";
import { type Actions, redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const response = await fetch(`${API_PUBLIC_URL}/forums/topics/${params.id}`);

    if (!response.ok) {
        return;
    }

    const { topic, posts } = await response.json();

    return {
        topic,
        posts,
    };
}

export const actions: Actions = {
    default: async ({ cookies, request, params }) => {
        const data = await request.formData();
        const content = data.get("content");

        const accessToken = cookies.get("chimimoryo.session");

        const response = await fetch(`${API_PUBLIC_URL}/forums/topics/${params.id}/reply`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                 content,
            }),
        });

        if (!response.ok) {
            return;
        }

        redirect(302, `/forums/topics/${params.id}`);
    },
};
