$files = Get-ChildItem -Path "app" -Recurse -Include "*.jsx","*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    if ($content -match '<<<<<<< HEAD') {
        Write-Host "Fixing: $($file.FullName)"
        
        # Remove conflict markers and keep the "theirs" version (after =======)
        $content = $content -replace '(?s)<<<<<<< HEAD.*?=======\s*', ''
        $content = $content -replace '>>>>>>> [a-f0-9]+\s*', ''
        
        # Write back to file
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

Write-Host "Done fixing merge conflicts!"
