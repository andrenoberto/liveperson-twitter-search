#!/bin/bash
# Docker ID/path
dockerpath="andrenoberto/liveperson-twitter-search"

# Run the Docker Hub container with kubernetes
kubectl run liveperson-twitter-search --image=$dockerpath

# Wait for pods to be created
kubectl wait --for=condition=ready pod liveperson-twitter-search

# Forward the container port to a host
kubectl port-forward liveperson-twitter-search 3000:3000
