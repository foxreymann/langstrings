#!/bin/bash

path=../roxhill-docker/src/roxhill-app/src/lang/root/
filename=core.js
input=$path$filename

while read line;
do
  key=$(echo $line | cut -d':' -f1)
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
    echo $key
    # git grep
#    is_key_used=$(gg $key 
    # sed
  fi
done < $input
