export function load({ url, locals }: { url: any; locals: any }) {
    const { user } = locals;

    return {
        url: url.href,
        user,
    };
}
