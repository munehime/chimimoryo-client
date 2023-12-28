import { API_PUBLIC_URL } from "$lib/constants";

export async function load() {
    const response = await fetch(`${API_PUBLIC_URL}/forums?group_by=category`);

    if (!response.ok) {
        return;
    }

    const { forums } = await response.json();

    return {
        forums,
    };
}
