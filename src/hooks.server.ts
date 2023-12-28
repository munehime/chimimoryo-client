import { API_PUBLIC_URL } from "$lib/constants";

// const protectedRoutes = ["/vote"];

export const handle = async ({ event, resolve }: { event: any; resolve: any }) => {
    const accessToken = event.cookies.get("chimimoryo.session");

    // if ((!session || !sessionSign) && protectedRoutes.includes(event.url.pathname)) {
    //     throw redirect(303, "/");
    // }

    const user = await getUser(accessToken);

    if (user) {
        event.locals.user = user;
    } else {
        event.locals.user = null;
    }

    return resolve(event);
};

async function getUser(accessToken: string) {
    return await fetch(`${API_PUBLIC_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then(async (response) => {
        const { user } = await response.json();

        return user;
    });
}
