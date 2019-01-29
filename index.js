// Code your solution in this file
function findMatching(collection, name) {
  // const newCollection = []
  //
  // for (const driver of collection) {
  //   if( name.toLowerCase() === driver.toLowerCase() ){
  //     newCollection.push(driver);
  //   }
  // }
  // return newCollection;
  return collection.filter( driver => name.toLowerCase() === driver.toLowerCase() );
}

function fuzzyMatch(collection, char) {
  // const newCollection = [];
  //
  // for (const driver of collection) {
  //   if( char === driver[0] + driver[1] ){
  //     newCollection.push(driver)
  //   }
  // }
  // // console.log(newCollection)
  // return newCollection
  return collection.filter( driver => char === driver[0] + driver[1] );
}

function matchName(collection, string) {
  return collection.filter( driver => driver['name'] === string );
}
