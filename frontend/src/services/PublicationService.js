import http from "../../http-common";

// https://www.bezkoder.com/vue-3-crud/
class PublicationService {
    getAll() {
        return http.get("/publication");
    }

    get(id) {
        return http.get(`/publication/get/${id}`);
    }

    getCount(field, limit) {
        return http.get(`/publication/count?field=${field}&limit=${limit}`);
    }

    top(limit) {
        return http.get(`/publication/top?limit=${limit}`);
    }

    twitter(doi) {
        return http.get(`/publication/twitter/${doi}`);
    }

    types(id = null) {
        return id === null ? http.get("/stats/types") : http.get(`/stats/types?id=${id}`);
    }

    sources(id = null) {
        return id === null ? http.get("/stats/sources") : http.get(`/stats/sources?id=${id}`);
    }

    lang(id = null) {
        return id === null ? http.get("/stats/lang") : http.get(`/stats/lang?id=${id}`);
    }

    // todo boolean original
    authors(id = null) {
        return id === null ? http.get("/stats/authors") : http.get(`/stats/authors?id=${id}`);
    }

    entities(id = null) {
        return id === null ? http.get("/stats/entities") : http.get(`/stats/entities?id=${id}`);
    }

    hashtags(id = null) {
        return id === null ? http.get("/stats/hashtags") : http.get(`/stats/hashtags?id=${id}`);
    }

    timeOfDay(id = null) {
        return id === null ? http.get("/stats/dayhour") : http.get(`/stats/dayhour?id=${id}`);
    }
}

export default new PublicationService();