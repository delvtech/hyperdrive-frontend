#!/bin/bash

# Function to generate Swagger client
generate_swagger_client() {
    local url="$1"
    local output_dir="$2"
    local swagger_filename="$3"  
    local api_class_name="$4"
    local custom_config="$5"

    local swagger_file="$output_dir/$swagger_filename"
    local types_file="$api_class_name.ts"

    # Create the directory if it doesn't exist
    mkdir -p "$output_dir"

    # Download the file
    curl -o "$swagger_file" "$url"

    # Check if the download was successful
    if [ $? -eq 0 ]; then
        echo "File downloaded successfully and saved to $swagger_file"
    else
        echo "Failed to download the file from $url"
        exit 1
    fi

    # Generate TypeScript API client
    npx swagger-typescript-api \
      -p "$swagger_file" \
      -o "$output_dir" \
      -n "$types_file" \
      --api-class-name "$api_class_name" \
      --custom-config "$custom_config" \
      --unwrap-response-data
}

# Call the function with different inputs
generate_swagger_client "https://rewards.hyperdrive.box/swagger.json" "src/rewards/generated" "swagger.json" "HyperdriveRewardsApi" "src/rewards/config.js"

# Merkl has a swagger spec, but it fails validation and therefore cannot be used
# at the moment. We've reached out to them and maybe able to enable this once
# it's fixed. In this event, we can remove the @merkl/api package 
# generate_swagger_client "https://api.merkl.xyz/docs/json" "src/rewards/generated/merkl" "swagger.json" "MerklApi" "src/rewards/config.js"