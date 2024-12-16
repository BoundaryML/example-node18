Run this script as follows:

```bash
export OPENAI_API_KEY=...
docker run -v .:/foo --env OPENAI_API_KEY -it node:18.18.2 bash -c "cd foo && npm install &&  && ./node_modules/.bin/baml-cli generate && ./node_modules/.bin/ts-node main.ts"
```
