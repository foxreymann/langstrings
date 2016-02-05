#!/bin/bash

input=../roxhill-docker/src/roxhill-app/src/lang/root/core.js

while read line;
do
  key=$(echo $line | cut -d':' -f1)
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
    echo $key
  fi
done < $input
