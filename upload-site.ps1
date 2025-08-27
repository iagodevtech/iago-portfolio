# Script de Upload Automático do Site
# Autor: Iago Alves
# Data: 26/08/2025

Write-Host " Iniciando Upload do Site iagodev.online" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

# Configurações
$localPath = ".\dist\"
$remotePath = "/public_html/"
$hostname = "iagodev.online"
$username = "iagoal00"

Write-Host " Verificando arquivos locais..." -ForegroundColor Yellow
if (Test-Path $localPath) {
    $files = Get-ChildItem -Path $localPath -Recurse -File
    Write-Host " Encontrados $($files.Count) arquivos para upload" -ForegroundColor Green
} else {
    Write-Host " Pasta dist/ não encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro" -ForegroundColor Red
    exit 1
}

Write-Host " Solicitando credenciais..." -ForegroundColor Yellow
$password = Read-Host "Digite sua senha FTP" -AsSecureString
$passwordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))

Write-Host " Iniciando upload via WinSCP..." -ForegroundColor Yellow

# Criar script WinSCP
$winscpScript = @"
option batch abort
option confirm off
open sftp://$username`:$passwordPlain@$hostname
cd $remotePath
put $localPath* .
close
exit
"@

$scriptPath = "upload-script.txt"
$winscpScript | Out-File -FilePath $scriptPath -Encoding UTF8

try {
    # Executar WinSCP
    $winscpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"
    if (Test-Path $winscpPath) {
        & $winscpPath /script=$scriptPath
        Write-Host " Upload concluído com sucesso!" -ForegroundColor Green
    } else {
        Write-Host " WinSCP não encontrado em $winscpPath" -ForegroundColor Red
        Write-Host " Faça o download em: https://winscp.net/" -ForegroundColor Yellow
    }
} catch {
    Write-Host " Erro durante o upload: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    # Limpar arquivo temporário
    if (Test-Path $scriptPath) {
        Remove-Item $scriptPath -Force
    }
}

Write-Host " Testando o site..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

try {
    $response = Invoke-WebRequest -Uri "https://$hostname" -Method Head -UseBasicParsing -TimeoutSec 10
    Write-Host " Site acessível! Status: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host " Site pode estar em cache. Aguarde alguns minutos." -ForegroundColor Yellow
}

Write-Host " Processo concluído!" -ForegroundColor Green
Write-Host " Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Acesse https://$hostname" -ForegroundColor White
Write-Host "   2. Teste o formulário de contato" -ForegroundColor White
Write-Host "   3. Acesse https://$hostname/admin/contatos" -ForegroundColor White
Write-Host "   4. Verifique os ícones coloridos no footer" -ForegroundColor White

Read-Host "Pressione Enter para sair"
