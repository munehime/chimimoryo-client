import { API_PUBLIC_URL } from "$lib/constants";

export async function load({ params }) {
    const response = await fetch(`${API_PUBLIC_URL}/forums/${params.id}/topics`);

    if (!response.ok) {
        return;
    }

    const { topics } = await response.json();

    return {
        forum_id: params.id,
        topics,
    };
}
