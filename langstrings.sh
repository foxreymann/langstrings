#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=lang/root/core.js

cd $sourcecode
pwd
while read line;
do
  key=$(echo $line | cut -d':' -f1)
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
    # git grep
    is_key_used=$(git grep core.$key .)
    # if empty delete line with sed
    if [ -z "$is_key_used" ]; then
      echo "sed -i '/ $key:/d' $langfile"
      sed -i '/ $key:/d' $langfile
    fi
  fi
done < $langfile
