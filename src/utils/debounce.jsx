export function debounce(func, wait) {
    var timeout;
  
    return () => {
      var context = this,
          args = arguments;
  
      var executeFunction = function() {
        func.apply(context, args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(executeFunction, wait);
    };
  };