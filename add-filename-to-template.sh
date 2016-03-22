for f in *; do sed -i "1s/^/$f\n/" "$f"; done
