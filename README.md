# Conversor de Unidades 📏

Bem-vindo ao Conversor de Unidades! Uma aplicação web simples, rápida e intuitiva para realizar conversões entre diversas grandezas físicas, como comprimento, massa, temperatura e muito mais.

**[Acesse o conversor aqui](https://yannickcruz.github.io/Conversor-de-Unidades/)**

## ✨ Funcionalidades

- **Interface Limpa e Intuitiva**: Navegue facilmente entre as diferentes categorias de conversão.
- **Ampla Gama de Unidades**: Converta as unidades de *comprimento, area, volume, temperatura, massa, tempo, pressão, velocidade e aceleração*.
- **Conversão em Tempo Real**: Os resultados são exibidos instantaneamente enquanto você digita.
- **Modo Escuro (Dark Mode)**: Alterne para um tema mais confortável para os olhos, com sua preferência salva para futuras visitas.
- **Responsivo**: Use em qualquer dispositivo, seja no computador, tablet ou celular.

---

## 🚀 Como Usar

1.  **Acesse a Página Principal**: Ao abrir o site, você verá várias categorias de unidades (Comprimento, Área, Volume, etc.).
2.  **Escolha a Categoria**: Clique em "Ir para o conversor >" na categoria que você deseja.
3.  **Insira o Valor**: Na página do conversor, digite o número que você quer converter no campo **"De:"**.
4.  **Selecione as Unidades**: Use as caixas de seleção para escolher a unidade de origem e a unidade de destino.
5.  **Pronto!** O resultado aparecerá automaticamente no campo **"Para:"**.

Para mudar o tipo de unidade, basta usar a barra de navegação no topo da página do conversor.

---

## 🛠️ Detalhes Técnicos

Este projeto foi construído com **HTML5, CSS3 e JavaScript puro (Vanilla)**, sem o uso de frameworks. Abaixo estão os detalhes e funcionamento do código.

### Comunicação entre páginas

A comunicação é feita através do **`sessionStorage`**. Cada link na página inicial possui um **`data-value`** valendo a respectiva unidade de conversão. Por exemplo, no link que envia para a conversão de comprimentos, o **`data-value`** vale **`length`**.
Na página de conversão, um **`eventListener`** do DOM cuida que os dados do **`sessionStorage`** sejam lidos e a unidade desejada seja carregada.

### Lógica de Conversão

A lógica de cálculo é centralizada e acionada por eventos.

-   Um **`event listener`** no campo de entrada **(`fromInput`)** dispara a função **`calcConversion`** a cada alteração do **(`'input'`)**.
-   Listeners nos **`selects`** também disparam a mesma função quando a unidade é alterada, recalculando o valor com base no número já existente.
-   A função **`calcConversion`** obtém as unidades de origem e destino, o valor de entrada e o tipo de grandeza (ex: "leng_data") e passa esses dados para o módulo **`conversionCalc.js`**, que retorna o resultado final.

A maioria das conversões segue uma fórmula baseada em fatores, onde cada unidade tem um valor relativo a uma unidade padrão (ex: metro para comprimento, e quilograma para massa).
A fórmula para todas as unidades (exceto temperatura) é ((valor de entrada * valor da unidade) / valor da unidade de saída). A conversão de temperatura é tratada como um caso especial, pois requerem fórmulas específicas.

### Modo Escuro

A preferência do usuário pelo tema escuro ou claro é salva usando o **`localStorage`**.

-   A função **`localStorageSetting(action)`** gerencia o salvamento (**`"save"`**) e o carregamento (**`"load"`**) do estado.
-   Ao carregar a página, o script verifica se existe um valor salvo em `localStorage`.
-   Quando o usuário clica no botão de alternância, o tema é trocado visualmente através da manipulação direta de estilos CSS via JavaScript, e a nova preferência é salva com **`localStorage.setItem()`** através do **`localStorageSetting(action)`**
  com o valor de 'action' sendo (**`"save"`**). Isso garante que, ao fechar e reabrir o navegador, a escolha do tema será mantida.

---

Feito por **Yannick Soares Cruz**
