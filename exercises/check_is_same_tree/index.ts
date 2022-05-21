export default function checkIsSameTree(treeA, treeB) {
  return JSON.stringify(treeA) === JSON.stringify(treeB)
}