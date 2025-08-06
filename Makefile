.PHONY: help optimize-images server build clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make optimize-images  - Optimize all images in content directory"
	@echo "  make server          - Start Hugo development server"
	@echo "  make server-draft    - Start Hugo server with draft posts"
	@echo "  make build           - Build the site for production"
	@echo "  make clean           - Clean the public directory"
	@echo "  make install-deps    - Install Go dependencies"

# Install Go dependencies
install-deps:
	@echo "Installing Go dependencies..."
	go mod tidy
	go get github.com/disintegration/imaging

# Optimize images
optimize-images: install-deps
	@echo "Running image optimization..."
	go run scripts/optimize-images.go

# Start development server
server:
	@echo "Starting Hugo development server..."
	hugo server --bind 0.0.0.0 --port 1313

# Start development server with draft posts
server-draft:
	@echo "Starting Hugo development server with draft posts..."
	hugo server --bind 0.0.0.0 --port 1313 -D

# Build for production
build:
	@echo "Building site for production..."
	hugo --minify

# Clean public directory
clean:
	@echo "Cleaning public directory..."
	hugo --gc 