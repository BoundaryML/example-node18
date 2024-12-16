import { b } from './baml_client'

const main = async () => {
    const result = await b.ExtractResume('https://www.google.com')
    console.log(result)
}

main()