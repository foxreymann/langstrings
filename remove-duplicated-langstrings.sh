#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=lang/root/core.js

cd $sourcecode
while read line;
do
  key=$(echo $line | cut -d':' -f1)
  value=$(echo $line | cut -d':' -f2 | sed "s/',//" | sed "s/'//g")
  # grep for translation value and see how many lines are outputed
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
echo $key
    grep -r "$value" $langfile
  fi
done < $langfile
