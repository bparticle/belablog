@echo off
echo Installing Go dependencies...
go mod tidy
go get github.com/disintegration/imaging

echo Running image optimization...
go run scripts/optimize-images.go

pause 