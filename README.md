# Sharing svelte store across two customElements
- Built off [svelte-rollup-template from metonym](https://github.com/metonym/svelte-rollup-template).

# What
- shared svelte store
- components use it for dev
- compiled the build step skips adding it to the module

# Show me
- install dependencies
```sh
npm install
```
- build the "superstore".
```sh
rollup -c rollup.config.store.js
```
- run develop
```sh
npm run develop
```
- open localhost:3000
- click on "the count is 0"
- watch both change
- Open developer tools
- type
```sh
superstore.count.subscribe(value => a = value)
```
- type and observe number matches count
```sh
a
```
- click on "the count is X"
- type and observe number matches count
```sh
a
```

# View via docker
## Run
```sh
docker run --name svelte-shared-store \
-p 8080:80 \
-v $PWD/build:/usr/share/nginx/html:ro \
-v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \
-P -d nginx:1.17-alpine
```

## Delete
```sh
docker container rm --force svelte-shared-store
```
