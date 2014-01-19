# Map reduce
### *Bart³omiej Pietraszuk*

Obliczamy sumê zauwazen UFO dla danego miasta w USA

## Funkcja map
```js
map = function() {
                emit(this.location, 1);
};
```

## Funkcja reduce
```js
reduce = function(key, val) {
                var count = 0;
                for(i = 0; i < val.length; i++) {
                        count += val[i];
                }
                return count;
};
```

## Map Reduce kolekcji
```js
db.ufo.mapReduce(
        map,
        reduce,
        { out : "result" }
);
```

## Wyœwietlenie rezultatu
```js
db.result.find().sort({value: -1})
```

## Rezultat (10 pierwszych)

```json
{ "_id" : "Seattle, WA", "value" : 440 }
{ "_id" : "Phoenix, AZ", "value" : 377 }
{ "_id" : "Los Angeles, CA", "value" : 294 }
{ "_id" : "San Diego, CA", "value" : 274 }
{ "_id" : "Las Vegas, NU", "value" : 271 }
{ "_id" : "Portland, OR", "value" : 253 }
{ "_id" : "Chicago, IL", "value" : 219 }
{ "_id" : "Tucson, AZ", "value" : 187 }
{ "_id" : "Miami, FL", "value" : 161 }
{ "_id" : "Austin, TX", "value" : 159 }
```

## Wykres
![](../../images/bpietraszuk/ufo.png)

## Skrypt
* [Skrypt](../../scripts/bpietraszuk/mapReduce.js)

## Strona HTML z wykresem
* [Skrypt](../../scripts/bpietraszuk/sample.js)
