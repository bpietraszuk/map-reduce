var map, reduce;

map = function() {
                emit(this.location, 1);
};

reduce = function(key, val) {
                var count = 0;
                for(i = 0; i < val.length; i++) {
                        count += val[i];
                }
                return count;
};

db.ufo.mapReduce(
        map,
        reduce,
        { out : "result" }
);