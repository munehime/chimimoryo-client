import { type Actions, redirect } from "@sveltejs/kit";
import { API_PUBLIC_URL } from "$lib/constants";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        const response = await fetch(`${API_PUBLIC_URL}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (!response.ok) {
            return;
        }

        const responseData = await response.json();

        cookies.set("chimimoryo.session", responseData.access_token, {
            path: "/",
            sameSite: false,
        });

        redirect(302, "/");
    },
};
