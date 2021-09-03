import http from "../../http-common";

class EventService {
    getAll() {
        return 'no longer supported '
    }

    get(id) {
        return 'no longer supported ' + id
    }

    newest() {
        return 'no longer supported '
    }

    words() {
        return http.get("/stats/words");
    }

    forPublication(id) {
        return 'no longer supported ' + id
    }
}

export default new EventService();
