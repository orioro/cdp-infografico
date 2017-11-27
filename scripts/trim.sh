inkscape $PWD/output/$1.svg --export-png=$PWD/tmp/$1.png
convert $PWD/tmp/$1.png -gravity South \
          -background white -splice 0x1  -background black -splice 0x1 \
          -trim  +repage -chop 0x1 $PWD/tmp/$1-north.png
convert $PWD/tmp/$1-north.png -gravity North \
          -background white -splice 0x1  -background black -splice 0x1 \
          -trim  +repage -chop 0x1 $PWD/trimmed/$1.png
