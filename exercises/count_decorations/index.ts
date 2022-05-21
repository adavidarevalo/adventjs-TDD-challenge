export default function countDecorations(bigTree) {
 const regex = /(\d+)/g;
 const treeJson = JSON.stringify(bigTree)
 const adorns = treeJson.match(regex)
 const adornsSum = adorns.reduce((a, b) => Number(a) + Number(b), 0);
 
  return adornsSum
}