const e=`---\r
title: Recuperação de Acesso Local no Windows com CMD via Tela de Login\r
description: Procedimento técnico para redefinir a senha de um utilizador local no Windows quando todos os métodos de entrada estão desativados.\r
tags: [windows, segurança, administração, cmd, recuperação-de-conta]\r
date: 2025-06-06\r
---\r
\r
Em situações em que todas as opções de entrada no Windows — como senha, PIN ou autenticação biométrica — estão temporariamente bloqueadas devido a falhas de autenticação ou reinicializações forçadas, é necessário recorrer a métodos administrativos de recuperação. Este artigo apresenta um procedimento técnico para redefinir a senha de um utilizador local utilizando o Prompt de Comando (CMD) através da tela de login, mesmo em sistemas com restrições de segurança recentes.\r
\r
> ⚠️ **Aviso legal**: Este procedimento deve ser utilizado exclusivamente com autorização e em conformidade com políticas organizacionais e legais. Trata-se de uma técnica com potencial de escalonamento de privilégio.\r
\r
## Contexto do Problema\r
\r
Ao tentar acessar o sistema, todas as opções de entrada exibiam a seguinte mensagem:\r
\r
> *"Esta entrada está desabilitada devido a tentativas de entrada com falhas ou a desligamentos repetidos. Use outra opção de entrada ou mantenha seu dispositivo ligado por pelo menos 2 horas e tente novamente."*\r
\r
O CMD não estava disponível na tela de login, impedindo a utilização direta do comando \`net user\`. Assim, foi necessário contornar a limitação utilizando um utilitário do sistema.\r
\r
## Passo 1: Acessar o ambiente de recuperação do Windows\r
\r
1. Reinicie o computador forçando o desligamento (pressionando o botão de energia por aproximadamente 5 segundos).\r
2. Após duas ou três tentativas consecutivas, o Windows entrará em modo de recuperação automático.\r
3. Selecione:\r
   - **Solução de Problemas**\r
   - **Opções Avançadas**\r
   - **Prompt de Comando**\r
\r
## Passo 2: Substituir o utilitário de acessibilidade pelo CMD\r
\r
No terminal aberto, execute os seguintes comandos:\r
\r
\`\`\`cmd\r
move c:\\windows\\system32\\utilman.exe c:\\windows\\system32\\utilman_bak.exe\r
copy c:\\windows\\system32\\cmd.exe c:\\windows\\system32\\utilman.exe\r
\`\`\`\r
\r
Isso substitui o "Utilitário de Acessibilidade" por uma instância do \`cmd.exe\`. O objetivo é permitir a execução de comandos administrativos a partir da tela de login.\r
\r
## Passo 3: Redefinir a senha via tela de login\r
\r
1. Reinicie o computador normalmente.\r
2. Na tela de login, clique no ícone de **Acessibilidade** (no canto inferior direito). Isso abrirá o Prompt de Comando com permissões elevadas.\r
3. No terminal, digite:\r
\r
\`\`\`cmd\r
net user nome_do_utilizador nova_senha\r
\`\`\`\r
\r
**Exemplo:**\r
\r
\`\`\`cmd\r
net user antonio 1234novaSenha\r
\`\`\`\r
\r
A mensagem \`"O comando foi concluído com êxito"\` confirmará a alteração.\r
\r
## Passo 4: Restaurar o utilitário original\r
\r
Para reverter a alteração feita no Passo 2:\r
\r
1. Reinicie novamente no modo de recuperação (como no Passo 1).\r
2. Acesse o Prompt de Comando.\r
3. Execute:\r
\r
\`\`\`cmd\r
copy c:\\windows\\system32\\utilman_bak.exe c:\\windows\\system32\\utilman.exe\r
\`\`\`\r
\r
> **Nota**: Certifica-te de que o ficheiro original \`utilman_bak.exe\` foi restaurado corretamente para manter a integridade do sistema.\r
\r
## Conclusão\r
\r
Este procedimento demonstrou como é possível, com conhecimento técnico e acesso físico ao dispositivo, redefinir a senha de um utilizador local no Windows mesmo com bloqueios de entrada. Trata-se de uma medida extrema, porém válida em contextos onde não há acesso administrativo convencional disponível e há autorização para realizar tal intervenção.\r
`;export{e as default};
