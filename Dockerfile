# Step 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Runtime stage
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and build output from builder stage
COPY --from=builder /app ./

# Only install production deps
RUN npm install --omit=dev

# Expose the Next.js default port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
