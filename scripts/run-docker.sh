#!/bin/bash
# Build image
docker build --tag=liveperson-twitter-search .

# Run image inside a container
docker run -p 3000:3000 -d --name liveperson-twitter-search liveperson-twitter-search
