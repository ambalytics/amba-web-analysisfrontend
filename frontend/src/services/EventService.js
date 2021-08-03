import http from "../../http-common";

class EventService {
    getAll() {
        return http.get("/event");
    }

    get(id) {
        return http.get(`/event/${id}`);
    }

    newest() {
        return http.get("/event/newest");
    }

    words() {
        return http.get("/stats/words");
    }

    forPublication(id) {
        return http.get(`/event/publication/${id}`);
    }
}

export default new EventService();
