#!/bin/bash

PLLUGINS_FILE="/usr/share/jenkins/ref/plugins.txt"

jenkins-plugin-cli --plugin-file $PLLUGINS_FILE

echo 'Plugins instalados'