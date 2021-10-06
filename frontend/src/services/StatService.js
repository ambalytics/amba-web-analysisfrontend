import http from "../../http-common";

class EventService {
    numbers(fields = null, doi = null) {
        // Example: /stats/numbers?fields=tweetCount&fields=followersReached&fields=authorCount&fields=totalScore
        if (fields === null) {
            fields = ['bot_rating', 'contains_abstract_raw', 'exclamations', 'followers', 'length', 'questions', 'score', 'sentiment_raw', 'count', 'pub_count'];
        }

        let params = new URLSearchParams();
        fields.forEach((e) => {
            params.append("fields", e);
        });

        if (doi) {
            params.append("doi", doi);
        }
        return http.get('/stats/numbers', {params: params});
    }

    newestTweet(doi, limit=1) {
        if (doi) {
            return http.get('/stats/tweets', {params: {limit: limit, doi: doi}});
        } else {
            return http.get('/stats/tweets', {params: {limit: limit}});
        }
    }

    profileData(doi, duration) {
        return http.get('/stats/profile', {params: {doi: doi, duration: duration}});
    }

    top(fields = null, doi = null, limit = 100) {
        if (fields === null) {
            fields = ['word', 'location'];
        }

       let params = new URLSearchParams();
        params.append("limit", limit);
        fields.forEach((e) => {
            params.append("fields", e);
        });
        if (doi) {
            params.append("doi", doi);
        }

        return http.get("/stats/top", {params: params});
    }

    percentages(fields = null, doi = null, limit = 12, minPercentage = 0.6) {
        if (fields === null) {
            fields = ['lang', 'tweet_type', 'entity', 'hashtag', 'source'];
        }

       let params = new URLSearchParams();
        params.append("limit", limit);
        params.append("minPercentage", minPercentage);
        fields.forEach((e) => {
            params.append("fields", e);
        });
        if (doi) {
            params.append("doi", doi);
        }

        return http.get("/stats/top/percentages", {params: params});
    }
}

export default new EventService();
