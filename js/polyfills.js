(function () {
  if (!window.performance) {
    window.performance = {};
  }
  if (!window.performance.now) {
    window.performance.now = function () {
      return new Date().getTime();
    };
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(function () {
          callback(window.performance.now());
        }, 16);
      };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame =
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      };
  }
  if (!Array.from) {
    Array.from = function (arrayLike) {
      return Array.prototype.slice.call(arrayLike);
    };
  }
  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
      var i;
      for (i = 0; i < this.length; i += 1) {
        if (predicate(this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
    };
  }
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, position) {
      var start = position || 0;
      return this.substr(start, search.length) === search;
    };
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function (targetLength, padString) {
      var output = String(this);
      var fill = String(padString || " ");
      while (output.length < targetLength) {
        output = fill + output;
      }
      return output.slice(output.length - targetLength);
    };
  }
}());
