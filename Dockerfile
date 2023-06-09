FROM node:lts

WORKDIR ./hyperdrive-monorepo

COPY ./apps/ ./apps/
COPY ./packages/ ./packages/
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./turbo.json ./turbo.json

RUN yarn install

# Add write permissions for all users so build paths can be written to
RUN chmod -R a+w ./

# Build all packages
RUN yarn build:packages