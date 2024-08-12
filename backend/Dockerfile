# Use the official bun image as a parent image
FROM oven/bun:1.1.20

# Set the working directory
WORKDIR /app

# Copy the source code and necessary files
COPY src package.json bun.lockb ./

# Install dependencies
RUN bun install --production

# Build
RUN bun run build

# Remove source code and dependencies after build
RUN rm -rf src node_modules

# Expose the port
EXPOSE 3000

# Start the server
CMD ["bun", "start:prod"]
