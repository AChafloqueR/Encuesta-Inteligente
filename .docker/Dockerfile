FROM jenkins/jenkins:lts

USER root

WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get update \
 && apt-get install -y node.js \
 && apt-get clean 

COPY package*.json ./

RUN npm install

COPY . . 

USER jenkins

EXPOSE 3000

CMD ["node", "app.js"]
