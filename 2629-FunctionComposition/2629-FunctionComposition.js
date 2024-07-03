    return function(x) {
    } else {
     return function(x) { return x; };
      var result = functions[functions.length - 1](x);
      for (var i = functions.length - 2; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
[
