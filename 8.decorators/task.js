//Задача № 1
function cachingDecoratorNew(func) {
  
}

//Задача № 2
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