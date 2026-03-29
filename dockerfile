# Build the frontend [dist folder]
# Copy the dist folder content in Backend/public folder

FORM node:20-alpine as frontend-builder

COPY ./frontend /app

WORKDIR /app
RUN npm install
RUN npm run build