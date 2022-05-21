export default function fixFiles(files: string[]): string[]{
    let values = {}

    return files.map(file => {
        if(values[file] === undefined) {
            values[file] = 0
            return file
        }

        values[file] += 1

        return `${file}(${values[file]})`
    })
 
}