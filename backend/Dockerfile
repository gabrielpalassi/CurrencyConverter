# Use the official alpine bun image as a parent image
FROM oven/bun:1.1.34-alpine

# Set the working directory
WORKDIR /app

# Copy the built source code
COPY dist/index.js ./

# Expose the port
EXPOSE 3000

# Start the server
CMD ["bun", "index.js"]
