FROM jenkins/jenkins:lts

USER root

RUN apt-get update && \
    apt-get install -y \
    curl \
    unzip \
    python3-pip \
    python3-dev \
    python3-venv \
    git \
    gnupg \
    software-properties-common

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g jest


ENV TERRAFORM_VERSION=1.6.0
RUN curl -O https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip && \
    unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip && \
    mv terraform /usr/local/bin/ && \
    rm terraform_${TERRAFORM_VERSION}_linux_amd64.zip


RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf awscliv2.zip aws


RUN pip3 install checkov --break-system-packages

RUN chown -R jenkins:jenkins /usr/local/bin/

USER jenkins