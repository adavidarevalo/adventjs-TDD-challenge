export default function groupBy(collection, it) {
    const value = (x) => typeof it === 'function' ? it(x) : x[it]
    let result = {};
    
        collection.forEach(x => {
            if(result[value(x)]) {
                result= {
                    ...result,
                    [value(x)]: [...result[value(x)], x]
                }
                return
            } 
            result = {
                ...result,
                [value(x)]: [x]
            }
        })    
    
  return result
}