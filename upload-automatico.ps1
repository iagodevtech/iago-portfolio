# Script de Upload Automático para iagodev.online
# Autor: Iago Alves
# Data: 2025

Write-Host " INICIANDO UPLOAD AUTOMÁTICO PARA IAGODEV.ONLINE" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green

# Configurações do servidor
$server = "iagodev.online"
$username = "iagoal00"
$password = Read-Host "Digite sua senha FTP" -AsSecureString
$remotePath = "/public_html/"
$localPath = "C:\Users\Iago\iago-portfolio\dist\"

Write-Host " Verificando arquivos locais..." -ForegroundColor Yellow

# Verificar se a pasta dist existe
if (-not (Test-Path $localPath)) {
    Write-Host " ERRO: Pasta dist não encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro." -ForegroundColor Red
    exit 1
}

# Contar arquivos
$files = Get-ChildItem -Path $localPath -Recurse -File
Write-Host " Encontrados $($files.Count) arquivos para upload" -ForegroundColor Green

Write-Host " Conectando ao servidor..." -ForegroundColor Yellow

# Instalar módulo WinSCP se necessário
if (-not (Get-Module -ListAvailable -Name WinSCP)) {
    Write-Host " Instalando módulo WinSCP..." -ForegroundColor Yellow
    Install-Module -Name WinSCP -Force -Scope CurrentUser
}

# Importar módulo
Import-Module WinSCP

try {
    # Configurar sessão
    $sessionOptions = New-Object WinSCP.SessionOptions
    $sessionOptions.HostName = $server
    $sessionOptions.UserName = $username
    $sessionOptions.Password = $password
    $sessionOptions.Protocol = [WinSCP.Protocol]::Sftp

    # Criar sessão
    $session = New-Object WinSCP.Session

    Write-Host " Conectando ao servidor..." -ForegroundColor Yellow
    $session.Open($sessionOptions)

    Write-Host " Conectado com sucesso!" -ForegroundColor Green

    # Listar arquivos remotos
    Write-Host " Listando arquivos remotos..." -ForegroundColor Yellow
    $remoteFiles = $session.ListDirectory($remotePath)

    Write-Host " Removendo arquivos antigos..." -ForegroundColor Yellow

    # Remover arquivos antigos
    foreach ($file in $remoteFiles.Files) {
        if ($file.Name -ne "." -and $file.Name -ne "..") {
            Write-Host "   Removendo: $($file.Name)" -ForegroundColor Gray
            $session.RemoveFiles("$remotePath$($file.Name)")
        }
    }

    Write-Host " Iniciando upload dos arquivos..." -ForegroundColor Yellow

    # Upload dos arquivos
    $transferOptions = New-Object WinSCP.TransferOptions
    $transferOptions.TransferMode = [WinSCP.TransferMode]::Binary

    $transferResult = $session.PutFiles("$localPath*", $remotePath, $false, $transferOptions)

    # Verificar resultado
    if ($transferResult.IsSuccess) {
        Write-Host " UPLOAD CONCLUÍDO COM SUCESSO!" -ForegroundColor Green
        Write-Host " Estatísticas:" -ForegroundColor Cyan
        Write-Host "   - Arquivos enviados: $($transferResult.Transfers.Count)" -ForegroundColor White
        Write-Host "   - Bytes transferidos: $($transferResult.Transfers | Measure-Object -Property FileSize -Sum).Sum" -ForegroundColor White

        foreach ($transfer in $transferResult.Transfers) {
            Write-Host "    $($transfer.FileName)" -ForegroundColor Green
        }
    } else {
        Write-Host " ERRO NO UPLOAD!" -ForegroundColor Red
        foreach ($transfer in $transferResult.Transfers) {
            if ($transfer.Error) {
                Write-Host "    $($transfer.FileName): $($transfer.Error.Message)" -ForegroundColor Red
            }
        }
    }

} catch {
    Write-Host " ERRO: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($session) {
        $session.Dispose()
    }
}

Write-Host ""
Write-Host " PRÓXIMOS PASSOS:" -ForegroundColor Cyan
Write-Host "1. Acesse: https://iagodev.online" -ForegroundColor White
Write-Host "2. Teste: https://iagodev.online/contato" -ForegroundColor White
Write-Host "3. Teste: https://iagodev.online/admin/contatos" -ForegroundColor White
Write-Host "4. Limpe o cache do navegador (Ctrl + F5)" -ForegroundColor White
Write-Host ""
Write-Host " SITE PRONTO PARA USO!" -ForegroundColor Green
