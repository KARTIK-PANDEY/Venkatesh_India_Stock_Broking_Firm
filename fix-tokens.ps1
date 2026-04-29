$srcPath = "c:\Users\karti\Venkatesh_Stock_Broking_Website\src"

$replacements = @{
    # Background / surface colors
    'bg-brand-navy'         = 'bg-background'
    'bg-brand-blue'         = 'bg-background'
    'bg-brand-mid'          = 'bg-primary'
    'bg-brand-sky'          = 'bg-accent'
    'bg-brand-gold-pale'    = 'bg-muted'
    'bg-surface-bg'         = 'bg-muted/40'
    'bg-surface-card'       = 'bg-card'
    'bg-surface-muted'      = 'bg-muted'
    'bg-surface-border'     = 'bg-border'
    'bg-white'              = 'bg-background'
    'bg-black/20'           = 'bg-muted/50'

    # Text colors - foreground
    'text-brand-navy'       = 'text-foreground'
    'text-brand-blue'       = 'text-foreground'
    'text-brand-mid'        = 'text-primary'
    'text-brand-sky'        = 'text-accent'
    'text-brand-gold'       = 'text-primary'
    'text-brand-gold-pale'  = 'text-primary-foreground'
    'text-text-primary'     = 'text-foreground'
    'text-text-secondary'   = 'text-muted-foreground'
    'text-text-muted'       = 'text-muted-foreground'
    'text-text-inverse'     = 'text-primary-foreground'
    'text-status-up'        = 'text-green-600'
    'text-status-down'      = 'text-red-600'
    'text-status-warn'      = 'text-yellow-600'
    'text-status-info'      = 'text-blue-600'

    # Border colors
    'border-surface-border' = 'border-border/50'
    'border-brand-mid'      = 'border-primary'
    'border-brand-navy'     = 'border-foreground'
    'border-brand-gold'     = 'border-primary'
    'border-surface-bg'     = 'border-muted'
    'border-white'          = 'border-border'

    # Shadows
    'shadow-card'           = 'shadow-sm'
    'shadow-hover'          = 'shadow-md'
    'shadow-nav'            = 'shadow-md'

    # Hover states
    'hover:text-brand-sky'  = 'hover:text-primary'
    'hover:text-brand-mid'  = 'hover:text-primary'
    'hover:text-white'      = 'hover:text-primary-foreground'
    'hover:bg-brand-mid'    = 'hover:bg-primary'
    'hover:bg-surface-muted'= 'hover:bg-muted'
    'hover:shadow-hover'    = 'hover:shadow-lg'

    # Font
    'font-display'          = 'font-display'

    # Misc
    'rounded-card'          = 'rounded-xl'
}

$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.tsx","*.ts"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $changed = $false
    foreach ($old in $replacements.Keys) {
        if ($content -match [regex]::Escape($old)) {
            $content = $content -replace [regex]::Escape($old), $replacements[$old]
            $changed = $true
        }
    }
    if ($changed) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "`nDone. All legacy brand tokens replaced."
