FROM node:18

RUN apt-get update && \
    apt-get install -y unzip wget git && \
    npm install -g jest

RUN wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip && \
    unzip terraform_1.6.0_linux_amd64.zip && \
    mv terraform /usr/local/bin/

RUN pip install checkov

WORKDIR /app
COPY . .

CMD ["bash"]
