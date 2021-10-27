# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile --no-optional

# Start app
CMD ["yarn", "start"]
