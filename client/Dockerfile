# pull official base image
FROM node:14-alpine
LABEL name="client"
# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install client dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000

# add client
COPY . ./

# start client
CMD ["npm", "start"]

#docker build -t riccardogiambra/hike-tracker-client:sprint-2 .
#docker run riccardogiambra/hike-tracker-client:sprint-2