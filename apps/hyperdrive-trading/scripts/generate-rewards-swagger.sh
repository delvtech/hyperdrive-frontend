#!/bin/bash

# Define the URL and output file path
URL="https://rewards.hyperdrive.money/swagger.json"
OUTPUT_DIR="src/rewards/generated"
SWAGGER_FILE="$OUTPUT_DIR/rewards-swagger.json"
TYPES_FILE="RewardsClient.ts"
CUSTOM_CONFIG="src/rewards/config.js"

# Create the directory if it doesn't exist
mkdir -p "$(dirname "$SWAGGER_FILE")"

# Download the file
curl -o "$SWAGGER_FILE" "$URL"

# Check if the download was successful
if [ $? -eq 0 ]; then
    echo "File downloaded successfully and saved to $SWAGGER_FILE"
else
    echo "Failed to download the file from $URL"
    exit 1
fi

npx swagger-typescript-api -p $SWAGGER_FILE -o $OUTPUT_DIR -n $TYPES_FILE --api-class-name RewardsApi   --custom-config $CUSTOM_CONFIG

