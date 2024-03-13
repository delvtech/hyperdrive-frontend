FROM node:lts

WORKDIR ./hyperdrive-frontend

COPY ./apps/ ./apps/
COPY ./packages/ ./packages/
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json

# Add write permissions for all users so build paths can be written to
RUN chmod -R a+w ./

RUN yarn install
RUN yarn build