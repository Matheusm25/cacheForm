window.onload = function() {
  loadCache();
};

/**
 * Add cache for specified field
 * @param {string} id id of the field that will be in cache
 */
function addCacheField(id) {
  const e = document.querySelector('#' + id);

  if (e) {
    e.addEventListener('blur', function( event ) {
      const value = e.value;
      localStorage.setItem(id, value);
    }, true);
  }
}

/**
 * Load the values stored in the localStorage
 */
function loadCache() {
  const SIZE = localStorage.length;

  const objs = [];
  for (let i = 0; i < SIZE; i++) {
    const name = localStorage.key(i);
    const value = localStorage.getItem(name);
    objs.push({
      id: name,
      value: value,
    });
  }

  for (let i = 0; i < SIZE; i++) {
    const e = document.querySelector('#' + objs[i].id);
    if (e) {
      e.value = objs[i].value;
    }
  }
}