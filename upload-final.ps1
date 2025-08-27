Write-Host " UPLOAD FINAL PARA IAGODEV.ONLINE" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green

Write-Host " Verificando arquivos..." -ForegroundColor Yellow
if (Test-Path "dist") {
    $files = Get-ChildItem -Path "dist" -Recurse -File
    Write-Host " Encontrados $($files.Count) arquivos para upload" -ForegroundColor Green
} else {
    Write-Host " Pasta dist não encontrada! Execute: npm run build" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host " INSTRUÇÕES PARA UPLOAD MANUAL:" -ForegroundColor Cyan
Write-Host "1. Abra o WinSCP" -ForegroundColor White
Write-Host "2. Conecte-se ao servidor:" -ForegroundColor White
Write-Host "   - Host: iagodev.online" -ForegroundColor White
Write-Host "   - Usuário: iagoal00" -ForegroundColor White
Write-Host "   - Senha: [sua senha]" -ForegroundColor White
Write-Host "3. Navegue até /public_html/" -ForegroundColor White
Write-Host "4. DELETE todos os arquivos antigos" -ForegroundColor White
Write-Host "5. Faça upload de TODOS os arquivos da pasta dist/" -ForegroundColor White

Write-Host ""
Write-Host " Após o upload, teste:" -ForegroundColor Cyan
Write-Host "- Site principal: https://iagodev.online" -ForegroundColor White
Write-Host "- Sistema de gestão: https://iagodev.online/admin/contatos" -ForegroundColor White
Write-Host "- Formulário de contato: https://iagodev.online/contato" -ForegroundColor White

Write-Host ""
Write-Host " IMPORTANTE: Limpe o cache do navegador (Ctrl + F5)" -ForegroundColor Yellow

Read-Host "Pressione Enter para sair"
