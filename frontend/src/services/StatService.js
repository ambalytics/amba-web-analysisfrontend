import http from "../../http-common";

class EventService {
    numbers(fields=null, doi=null) {
        // Example: /stats/numbers?fields=tweetCount&fields=followersReached&fields=authorCount&fields=totalScore
        if (fields === null) {
            fields = ['tweetCount', 'followersReached', 'authorCount', 'totalScore'];
        }

        let first = true;
        let paramString = '';
        fields.forEach(f => {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'fields=' + f;
        });

        if (doi !== null) {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'doi=' + doi;
        }

        return http.get("/stats/numbers" + paramString);
    }

    top(fields=null, doi=null, limit=20, minPercentage=0.5) {
        // Example: /stats/top?fields=languages&fields=words&fields=types&fields=sources&fields=entities&fields=hashtags&fields=countries&limit=10&min_percentage=1
        if (fields === null) {
            fields = ['languages', 'words', 'types', 'sources', 'entities', 'hashtags', 'countries'];
        }

        let first = true;
        let paramString = '';
        fields.forEach(f => {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'fields=' + f;
        });

        if (doi !== null) {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'doi=' + doi;
        }

        if (limit !== null) {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'limit=' + limit;
        }

        if (minPercentage !== null) {
           if (first) {
               paramString += '?';
               first = false;
           } else {
               paramString += '&';
           }
           paramString += 'min_percentage=' + minPercentage;
        }

        return http.get("/stats/top" + paramString);
    }
}

export default new EventService();
