try {
    (await import("husky")).install();
} catch (err) {
    if (err.code !== "MODULE_NOT_FOUND") {
        throw err;
    }
}
