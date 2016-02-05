#!/bin/bash

sourcecode=../roxhill-docker/src/roxhill-app/src
langfile=lang/root/core.js

cd $sourcecode
while read line;
do
  key=$(echo $line | cut -d':' -f2 | sed "s/',/'/")
  echo $key
done < $langfile
