function Show-Tree($Path = ".", $indent = 0)
{
    Get-ChildItem -Path $Path | ForEach-Object {
        "{0}{1}" -f ("    " * $indent), $_.Name
        if ($_.PSIsContainer) {
            Show-Tree -Path $_.FullName -indent ($indent + 1)
        }
    }
}

Show-Tree