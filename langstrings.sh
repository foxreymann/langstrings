#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=/lang/root/core.js
input=$sourcecode$langfile

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
