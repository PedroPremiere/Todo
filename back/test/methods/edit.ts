export function edit(params: { url; payload?; token?: string }) {
    if (params.token) {
        return request
            .put(params.url)
            .send(params.payload)
            .set('Authorization', 'Bearer ' + params.token);
    }

    return request.put(params.url).send(params.payload);
}
