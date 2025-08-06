package main

import (
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/disintegration/imaging"
)

const maxWidth = 1000

func main() {
	fmt.Println("🔧 Starting image optimization...")
	
	// Walk through content directory
	err := filepath.Walk("content", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		
		// Skip directories
		if info.IsDir() {
			return nil
		}
		
		// Check if file is an image
		ext := strings.ToLower(filepath.Ext(path))
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".gif" {
			return nil
		}
		
		// Skip already optimized files
		if strings.Contains(path, "optimize") {
			return nil
		}
		
		fmt.Printf("Processing: %s\n", path)
		
		// Open image
		file, err := os.Open(path)
		if err != nil {
			fmt.Printf("Error opening %s: %v\n", path, err)
			return nil
		}
		defer file.Close()
		
		// Decode image
		img, format, err := image.Decode(file)
		if err != nil {
			fmt.Printf("Error decoding %s: %v\n", path, err)
			return nil
		}
		
		// Get original dimensions
		bounds := img.Bounds()
		originalWidth := bounds.Dx()
		originalHeight := bounds.Dy()
		
		// Check if resizing is needed
		if originalWidth <= maxWidth {
			fmt.Printf("  ✓ Already optimal size (%dx%d)\n", originalWidth, originalHeight)
			return nil
		}
		
		// Calculate new dimensions
		ratio := float64(maxWidth) / float64(originalWidth)
		newWidth := maxWidth
		newHeight := int(float64(originalHeight) * ratio)
		
		fmt.Printf("  📏 Resizing from %dx%d to %dx%d\n", originalWidth, originalHeight, newWidth, newHeight)
		
		// Resize image
		resized := imaging.Resize(img, newWidth, newHeight, imaging.Lanczos)
		
		// Create output path
		dir := filepath.Dir(path)
		filename := filepath.Base(path)
		nameWithoutExt := strings.TrimSuffix(filename, filepath.Ext(filename))
		outputPath := filepath.Join(dir, nameWithoutExt+"_optimized"+filepath.Ext(filename))
		
		// Create output file
		outputFile, err := os.Create(outputPath)
		if err != nil {
			fmt.Printf("Error creating output file %s: %v\n", outputPath, err)
			return nil
		}
		defer outputFile.Close()
		
		// Encode and save based on format
		switch format {
		case "jpeg":
			err = jpeg.Encode(outputFile, resized, &jpeg.Options{Quality: 85})
		case "png":
			err = png.Encode(outputFile, resized)
		case "gif":
			// For GIFs, we'll save as PNG since GIF optimization is complex
			err = png.Encode(outputFile, resized)
		default:
			err = jpeg.Encode(outputFile, resized, &jpeg.Options{Quality: 85})
		}
		
		if err != nil {
			fmt.Printf("Error encoding %s: %v\n", outputPath, err)
			return nil
		}
		
		// Get file sizes
		originalInfo, _ := os.Stat(path)
		optimizedInfo, _ := os.Stat(outputPath)
		
		originalSize := originalInfo.Size()
		optimizedSize := optimizedInfo.Size()
		savings := float64(originalSize-optimizedSize) / float64(originalSize) * 100
		
		fmt.Printf("  ✅ Saved as %s (%.1f%% smaller)\n", filepath.Base(outputPath), savings)
		
		return nil
	})
	
	if err != nil {
		log.Fatal(err)
	}
	
	fmt.Println("🎉 Image optimization complete!")
} 