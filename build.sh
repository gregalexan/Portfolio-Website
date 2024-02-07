#!/bin/bash

# Fetch secrets from GitHub Secrets
apiKey=$API_KEY
cx=$CX

# Replace placeholders in JavaScript code
sed -i "s/REPLACE_WITH_GOOGLE_API_KEY/$apikey/g" main.js
sed -i "s/REPLACE_WITH_CX_ID/$cx/g" main.js
