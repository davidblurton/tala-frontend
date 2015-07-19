npm run build
eval "$(boot2docker shellinit)"
docker build -t davidblurton/tala-frontend . && docker push davidblurton/tala-frontend
