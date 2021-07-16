#!/bin/bash
# Docker ID/path
dockerpath="andrenoberto/liveperson-twitter-search"

# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker tag liveperson-twitter-search $dockerpath
docker login --username $DOCKER_USERNAME

# Push image to a docker repository
docker push $dockerpath
