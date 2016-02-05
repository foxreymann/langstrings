#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=lang/root/core.js

cd $sourcecode
echo $(pwd)
while read line;
do
  key=$(echo $line | cut -d':' -f1)
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
    echo $key
    # git grep
    is_key_used=$(git grep core.$key .)
    echo $is_key_used
    # sed
  fi
done < $langfile
