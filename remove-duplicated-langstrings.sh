#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=lang/root/core.js

cd $sourcecode
while read line;
do
  key=$(echo $line | cut -d':' -f1)
  value=$(echo $line | cut -d':' -f2 | sed "s/',/\"/")
echo $value
  # grep for this value and see how many lines are outputed
  if [[ $key =~ ^[A-Za-z_]+$ ]]; then
    echo "grep -r \"$value\" $langfile"
    is_duplicated=$(grep -r "$value" $langfile)
    echo $is_duplicated
  fi
done < $langfile
