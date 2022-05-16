export default function contains(store: object, product: string) {
    const transformObject = JSON.stringify(store)
    return transformObject.includes(product)
  }