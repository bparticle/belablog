@echo off
echo 🔧 Running image optimization...
go run scripts/optimize-images.go
echo.
echo ✅ Optimization complete! Check the _optimized files in your content folders.
pause 