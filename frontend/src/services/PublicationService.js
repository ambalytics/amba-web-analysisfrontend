import http from "../../http-common";

// https://www.bezkoder.com/vue-3-crud/
class PublicationService {
    getAll() {
        return http.get("/publication");
    }

    get(id) {
        return http.get(`/publication/get/${id}`);
    }

    getCount() {
        return http.get('/publication/count');
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

    words(id) {
        return http.get(`/stats/words?id=${id}`);
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

    countries(id = null) {
        return id === null ? http.get("/stats/locations") : http.get(`/stats/locations?id=${id}`);
    }

    followers(id = null) {
        return id === null ? http.get("/stats/followers") : http.get(`/stats/followers?id=${id}`);
    }

    authorCount(id = null) {
        return id === null ? http.get("/stats/authorcount") : http.get(`/stats/authorcount?id=${id}`);
    }

    tweetCount(id = null) {
        return id === null ? http.get("/stats/tweetcount") : http.get(`/stats/tweetcount?id=${id}`);
    }

    scoreSum(id = null) {
        return id === null ? http.get("/stats/scoresum") : http.get(`/stats/scoresum?id=${id}`);
    }

    timeBinned(id = null) {
        return id === null ? http.get("/stats/timebinned") : http.get(`/stats/timebinned?id=${id}`);
    }
}

export default new PublicationService();