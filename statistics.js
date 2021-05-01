

const stats = (validate, arrayLinks) => {
  let results = {
    total: 0,
    unique: 0,
    broken: 0,
  };
  results.total = arrayLinks.length;

  arrayLinks.forEach((element) => {
    let duplicate = arrayLinks.filter((links) => {
      if (links.href == element.href) {
        return true;
      } else {
        return false;
      }
    });

    if (duplicate.length == 1) {
      results.unique = results.unique + 1;
    }

    if (validate) {
      if( element.statusText == 'fail'){
        results.broken - results.broken + 1;
      }
    } 
  });

  if (!validate) {
    delete results.broken;
  } 
  // console.log(results);
  return results;
};

module.exports = { stats };
//console.log(total(arrayLinks(pathRoute)));
// console.log(arrayLinks(pathRoute))
