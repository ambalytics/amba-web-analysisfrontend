import http from "../../http-common";

// https://www.bezkoder.com/vue-3-crud/
class PublicationService {
    getAll() {
        return http.get("/publication");
    }

    get(id) {
        return http.get(`/publication/get?doi=${id}`);
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
        return id === null ? http.get("/stats/types") : http.get(`/stats/types?doi=${id}`);
    }

    words(id) {
        return http.get(`/stats/words?doi=${id}`);
    }

    sources(id = null) {
        return id === null ? http.get("/stats/sources") : http.get(`/stats/sources?doi=${id}`);
    }

    lang(id = null) {
        return id === null ? http.get("/stats/lang") : http.get(`/stats/lang?doi=${id}`);
    }


    // authors(id = null) {
    //     return id === null ? http.get("/stats/authors") : http.get(`/stats/authors?doi=${id}`);
    // }

    entities(id = null) {
        return id === null ? http.get("/stats/entities") : http.get(`/stats/entities?doi=${id}`);
    }

    hashtags(id = null) {
        return id === null ? http.get("/stats/hashtags") : http.get(`/stats/hashtags?doi=${id}`);
    }

    timeOfDay(id = null) {
        return id === null ? http.get("/stats/dayhour") : http.get(`/stats/dayhour?doi=${id}`);
    }

    countries(id = null) {
        return id === null ? http.get("/stats/locations") : http.get(`/stats/locations?doi=${id}`);
    }

    followers(id = null) {
        return id === null ? http.get("/stats/followers") : http.get(`/stats/followers?doi=${id}`);
    }

    authorCount(id = null) {
        return id === null ? http.get("/stats/authorcount") : http.get(`/stats/authorcount?doi=${id}`);
    }

    tweetCount(id = null) {
        return id === null ? http.get("/stats/tweetcount") : http.get(`/stats/tweetcount?doi=${id}`);
    }

    scoreSum(id = null) {
        return id === null ? http.get("/stats/scoresum") : http.get(`/stats/scoresum?doi=${id}`);
    }

    timeBinned(id = null) {
        return id === null ? http.get("/stats/timebinned") : http.get(`/stats/timebinned?doi=${id}`);
    }
}

export default new PublicationService();