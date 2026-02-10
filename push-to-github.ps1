# Git commands to push portfolio to GitHub
# Run this script in PowerShell from the project directory

Write-Host "Initializing git repository..." -ForegroundColor Cyan
if (-not (Test-Path .git)) {
    git init
}

Write-Host "Adding remote repository..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/Sakura-winter/Sakura-Portfolio.git

Write-Host "Staging all files..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Retro terminal portfolio with dynamic taglines"

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git branch -M main
git push -u origin main

Write-Host "Done! Your portfolio is now on GitHub." -ForegroundColor Green

