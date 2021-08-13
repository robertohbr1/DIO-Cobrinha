# DIO-Cobrinha

Criação do jogo Cobrinha com Javascript

Implementei algumas melhorias como:
- A geração da Comida verifica se não irá aparecer por cima da cobrinha
- Criação de Controle de Velocidade: Lento, Médio, Rápido
- Apresentação do tamanho da cobrinha, para pontuação
- Alteração do controle do grid com números de 0 a 15. Antes eram controlados pelo número * box.
- Alteração no controle da função principal, para simplificar alguns controles
- Controle do KeyDown para não permitir pressionar duas teclas antes de ser processado a primeira. Isso acontecia na velocidade baixa, e terminava o jogo se fosse pressionada uma combinação de teclas inválida, por exemplo: a cobrinha indo para direita, pressionar cima e depois esquerda. A rotina de controle de teclas mudava para Up e depois para Left antes de processar o Up, e fazia a cobrinha voltar contra o próprio corpo... hehehe

Ideias de melhorias:
- Permitir definir o tamanho do grid
- Permitir definir se pode "sair do quadro e voltar pelo outro lado" ou não
