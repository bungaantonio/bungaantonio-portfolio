const a=`---\r
title: Configuração de Múltiplas Chaves SSH para Git\r
description: Passo a passo para gerenciar duas contas diferentes (pessoal e profissional) com chaves SSH separadas e configurá-las para uso com GitHub (ou GitLab).\r
tags: [git, github, desenvolvimento, chaves-ssh]\r
date: 2025-05-16\r
---\r
\r
Quando você trabalha com múltiplas contas no GitHub (ou GitLab), como uma conta pessoal e outra profissional, é essencial manter separadas suas credenciais de acesso. O uso de chaves SSH distintas para cada conta é uma maneira segura e eficaz de gerenciar esse cenário. Abaixo está um passo a passo completo para configurar e usar múltiplas chaves SSH com o Git.\r
\r
## Pré-requisitos\r
\r
    Git instalado (\`git --version\`)\r
    Acesso ao terminal (Linux, macOS, ou Git Bash no Windows)\r
    Contas configuradas no GitHub ou GitLab\r
\r
## Passo 1: Gerar Chaves SSH distintas\r
\r
Primeiro, você precisa gerar duas chaves SSH separadas. Abra o terminal e execute os seguintes comandos:\r
\r
Conta pessoal:\r
\r
\`\`\`bash\r
ssh-keygen -t ed25519 -C "seu-email-pessoal@example.com" -f ~/.ssh/id41999_pessoal\r
\`\`\`\r
\r
+ Comentário/email: \`bunga.antonio@safari.com\`\r
+ chave privada: \`~/.ssh/id41999_pessoal\`\r
+ chave pública: \`~/.ssh/id41999_pessoal.pub\`\r
\r
Conta profissional:\r
\r
\`\`\`bash\r
ssh-keygen -t ed25519 -C "bunga.antonio@empresa.com" -f ~/.ssh/id_ed25519_trabalho\r
\`\`\`\r
\r
+ Comentário/email: \`seu-email-pessoal@example.com\`\r
+ chave privada: \`~/.ssh/id41999_profissional\`\r
+ chave pública: \`~/.ssh/id41999_profissional.pub\`\r
\r
> **Dica**: Quando solicitado, você pode definir uma passphrase para maior segurança.\r
\r
## Passo 2: Associar as chaves nas plataformas (GitHub, GitLab, etc.)\r
\r
1. Acesse sua conta no GitHub ou GitLab.\r
2. Vá para **Configurações** (Settings).\r
3. Selecione **SSH and GPG keys**.\r
4. Clique em **New SSH key**.\r
5. Cole o conteúdo da chave pública (\`~/.ssh/id41999_pessoal.pub\`) e dê um nome descritivo (ex: "Pessoal").\r
6. Repita o processo para a chave profissional (\`~/.ssh/id41999_profissional.pub\`), nomeando-a de forma apropriada (ex: "Profissional").\r
7. Salve as alterações.\r
\r
## Passo 3: Configurar o arquivo config (\`~/.ssh/config\`) do SSH\r
\r
Crie ou edite esse arquivo para mapear cada chave a um host:\r
\r
\`\`\`bash\r
code ~/.ssh/config\r
\`\`\`\r
\r
ou\r
\r
\`\`\`bash\r
nano ~/.ssh/config\r
\`\`\`\r
\r
ou\r
\r
\`\`\`bash\r
notepad ~/.ssh/config\r
\`\`\`\r
\r
Adicione o seguinte conteúdo:\r
\r
\`\`\`ssh\r
# Conta Pessoal\r
Host github-pessoal\r
    HostName github.com\r
    User git\r
    IdentityFile ~/.ssh/id41999_pessoal\r
\r
# Conta Profissional\r
Host github-profissional\r
    HostName github.com\r
    User git\r
    IdentityFile ~/.ssh/id41999_profissional\r
\r
\`\`\`\r
## Passo 4: Clonando repositórios com a chave correta\r
\r
Pessoal\r
\`\`\`bash\r
git clone git@github-pessoal:usuario/repositorio.git\r
\`\`\`\r
Profissional\r
\`\`\`bash\r
git clone git@github-profissional:usuario/repositorio.git\r
\`\`\`\r
\r
## Passo 5: Testar a configuração\r
Para verificar se tudo está funcionando corretamente, execute o seguinte comando:\r
\r
\`\`\`bash\r
ssh -T git@github-pessoal\r
\`\`\`\r
\r
ou\r
\`\`\`bash\r
ssh -T git@github-profissional\r
\`\`\`\r
\r
## Passo 6: Configurar user.name e user.email por conta\r
\r
Para garantir que os commits sejam feitos com o nome e email corretos, você pode configurar isso por repositório:\r
\r
\`\`\`bash\r
git config user.name "Seu Nome"\r
git config user.email "seu@email.com"\r
\`\`\`\r
\r
### Verificar configurações\r
\`\`\`bash\r
git config user.name\r
git config user.email\r
git config --list\r
\`\`\``;export{a as default};
