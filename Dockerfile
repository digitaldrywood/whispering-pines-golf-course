# Build stage
FROM golang:1.24-alpine AS builder

RUN apk add --no-cache git nodejs npm

WORKDIR /app

# Install Go tools
RUN go install github.com/a-h/templ/cmd/templ@latest

# Copy go mod files
COPY go.mod go.sum ./
RUN go mod download

# Copy package.json and install npm dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Generate templ files
RUN templ generate -path templates

# Build Tailwind CSS
RUN npx @tailwindcss/cli -i static/css/input.css -o static/css/output.css --minify

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server ./cmd/server

# Runtime stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates tzdata

WORKDIR /app

# Copy binary and static assets
COPY --from=builder /app/server .
COPY --from=builder /app/static ./static
COPY --from=builder /app/internal/database/migrations ./internal/database/migrations

# Create data directory for SQLite
RUN mkdir -p /app/data

# Expose port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV ENV=production
ENV DATABASE_URL=/app/data/whispering-pines.db

CMD ["./server"]
