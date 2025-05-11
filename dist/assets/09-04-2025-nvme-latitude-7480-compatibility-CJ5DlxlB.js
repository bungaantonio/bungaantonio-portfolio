const e=`---\r
title: Instalando SSD NVMe Gen4 no Dell Latitude 7480\r
description: Passo a passo para usar um SSD Kingston NV2 PCIe 4.0 em um Latitude 7480, contornando limitações de compatibilidade.\r
tags: [hardware, compatibilidade, SSD, Dell, NVMe]\r
date: 2025-04-09\r
---\r
\r
Atualizar o armazenamento de um notebook antigo pode ser mais simples do que parece — mesmo em modelos que, à primeira vista, não reconhecem SSDs NVMe modernos. Neste guia, descrevo como instalar com sucesso um **Kingston NV2 PCIe 4.0** em um **Dell Latitude 7480**, modelo que não detectava o disco inicialmente por conta da configuração padrão da BIOS.\r
\r
## O problema\r
\r
Ao inserir o NV2 no Latitude 7480, o SSD:\r
\r
- Não aparecia na BIOS\r
- Não era listado no instalador do sistema operacional\r
- Funcionava normalmente em outros modelos mais recentes\r
\r
Tudo indicava um problema de compatibilidade, não com o SSD em si, mas com a forma como a BIOS do Latitude lida com controladores NVMe.\r
\r
## Diagnóstico\r
\r
- O Latitude 7480 utiliza chipsets Intel de 6ª ou 7ª geração, com suporte máximo a **PCIe Gen3**\r
- A BIOS vem configurada com o modo **RAID On**, o que pode impedir o reconhecimento de alguns SSDs NVMe\r
- O NV2 utiliza um controlador **Phison E21**, que funciona melhor com acesso direto via **modo AHCI**\r
\r
## O que funcionou\r
\r
### 1. Atualize a BIOS\r
\r
Vá até o [site de suporte da Dell](https://www.dell.com/support/home/pt-br/product-support/product/latitude-14-7480-laptop/drivers) e baixe:\r
\r
- A última versão da **BIOS**\r
- Drivers de **chipset**\r
- (Opcional) Intel RST — apenas necessário se mantiver RAID\r
\r
### 2. Altere o modo SATA para AHCI\r
\r
No boot, pressione **F2** e acesse:\r
\r
> \`System Configuration > SATA Operation\`\r
\r
Mude de \`RAID On\` para \`AHCI\`. Salve e reinicie.\r
\r
> ⚠️ Importante: se o sistema já estiver instalado com RAID, a mudança pode impedir o boot. Faça backup.\r
\r
### 3. Instale fisicamente o SSD\r
\r
- Insira o NV2 no slot M.2\r
- Aperte o parafuso de fixação\r
- Ligue o notebook e verifique na BIOS se o SSD aparece\r
\r
## Resultado\r
\r
Após os ajustes:\r
\r
- O NV2 foi reconhecido normalmente\r
- A instalação do sistema ocorreu sem problemas\r
- A taxa de leitura ficou em torno de **3000 MB/s**, limitada pela interface Gen3\r
- Nenhum erro ou instabilidade foi detectado após várias horas de uso\r
\r
## Testes complementares\r
\r
Ferramentas úteis para validar a instalação:\r
\r
| Sistema | Ferramenta         | Verificações principais        |\r
| ------- | ------------------ | ------------------------------ |\r
| Windows | CrystalDiskInfo    | Interface, temperatura, health |\r
| Linux   | \`nvme-cli\`, \`lshw\` | Capacidade, link speed, status |\r
\r
\r
## Conclusão\r
\r
Mesmo com limitações de geração e interface, é possível aproveitar SSDs modernos em máquinas como o Latitude 7480. A troca de RAID para AHCI foi a chave — um ajuste simples que pode dar anos extras de vida útil ao equipamento.\r
\r
## Recomendações finais\r
\r
- Compartilhe com colegas que lidam com hardware legado\r
- Consulte nosso repositório [no GitHub](#) com mais testes e documentação\r
`;export{e as default};
