FROM node:10.15.0 as builder

WORKDIR /build_dir

ARG npm_registry=http://build-artifactory.eng.vmware.com:80/artifactory/api/npm/npm

RUN apt-get update \
    && apt-get install -y --no-install-recommends python-yaml=3.12-1

COPY . /build_dir

COPY api/swagger.yml /build_dir/swagger.yaml

RUN python -c 'import sys, yaml, json; y=yaml.load(sys.stdin.read()); print json.dumps(y)' < swagger.yaml > swagger.json



ENV NPM_CONFIG_REGISTRY=${npm_registry}
RUN npm install --unsafe-perm
RUN node --max_old_space_size=1024 'node_modules/@angular/cli/bin/ng' build --prod

FROM nginx:1.16.0-alpine

COPY --from=builder /build_dir/dist/Arpenteur-UI /usr/share/nginx/html
COPY --from=builder /build_dir/swagger.json /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
VOLUME /var/cache/nginx /var/log/nginx /run

STOPSIGNAL SIGQUIT

HEALTHCHECK CMD curl --fail -s http://127.0.0.1:8080 || exit 1
USER nginx
CMD ["nginx", "-g", "daemon off;"]

