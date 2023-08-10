//Задача № 1 Debounce декоратор с моментальным вызовом и подсчётом 
//количества вызовов
 
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
        wrapper.count++;
        func(...args)
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    func(...args);
    wrapper.count++;
    }, delay);
}

return wrapper;
}
module.exports = {
    debounceDecoratorNew, 
  }

  
 //Задача 2 

 const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;

  return (...args) => {
    const hash = args.join(",");
    let searchingObjectInCache = cache.find((item) => {
      if (hash in item) {
        return item;

      }

    });

    if (searchingObjectInCache) {
      return "Из кеша: " + searchingObjectInCache[hash];

    }

    const result = func(...args);
    let newObjest = {};
    newObjest[hash] = result;
    cache.push(newObjest);

    if (cache.length > maxCacheValuesCount) {
      cache.shift();

    }

    return "Вычисляем: " + result;
    
  }
}

module.exports = {
  cachingDecoratorNew
}