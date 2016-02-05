#!/bin/bash

input=../roxhill-docker/src/roxhill-app/src/lang/root/core.js

while read line;
do
  echo $line
  key=$(echo $line | cut -d':' -f1)
done < $input
