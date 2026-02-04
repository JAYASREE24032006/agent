# Build Stage
FROM node:18-alpine AS build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine AS production-stage

# Copy build artifacts from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
