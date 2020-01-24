# development

run build
`docker build -t next-app .`

run docker image
`docker run --rm -it -p 3000:3000 next-app`

run cicleci build
`circleci local execute --job build`
