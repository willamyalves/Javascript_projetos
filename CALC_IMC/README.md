### **Estrutura Geral**
O **IMC Calculator** permite ao usuário calcular o Índice de Massa Corporal (IMC) inserindo a altura e o peso. O resultado é exibido junto com a classificação (Magreza, Normal, Sobrepeso, etc.) e a opção de voltar para refazer o cálculo.

#### Interface
![calc-imc-image](./img/calc-imc-image.png)

#### Resultado
![calc-imc-image](./img/calc-imc-image2.png)

### **Fluxo de Funcionamento**

1. **Entrada de Dados (HTML - `index.html`)**
   - A página possui um formulário simples onde o usuário insere sua **altura** e **peso**.
   - Dois botões controlam a interação:
     - **Calcular**: Inicia o cálculo do IMC.
     - **Limpar**: Limpa os campos de entrada.

2. **Cálculo do IMC (JavaScript - `script.js`)**
   - O cálculo do IMC é realizado quando o usuário clica no botão "Calcular" ou pressiona "Enter".
   - O valor do IMC é calculado usando a fórmula:
     \[
     IMC = \frac{\text{peso}}{(\text{altura})^2}
     \]
     - O resultado é arredondado para uma casa decimal.
     - O resultado é então exibido na interface.

3. **Exibição do Resultado**
   - Após o cálculo, o formulário é ocultado, e o resultado do IMC é exibido junto com uma classificação que pode ser:
     - **Magreza**
     - **Normal**
     - **Sobrepeso**
     - **Obesidade**
     - **Obesidade Grave**
   - A cor da fonte é alterada dinamicamente conforme a classificação para facilitar a visualização.

4. **Voltar e Refazer o Cálculo**
   - O usuário pode clicar no botão **Voltar** para retornar ao formulário e fazer um novo cálculo.
   - Isso faz com que o formulário original reapareça e os campos sejam limpos.

### **Componentes Principais**

1. **HTML (`index.html`)**
   - Estrutura a interface da página, contendo o formulário de entrada de altura e peso e o resultado do IMC.
   - Define a tabela de classificações do IMC (IMC, Classificação e Grau de Obesidade).

2. **CSS (`style.css`)**
   - Estiliza a página com um design simples e moderno:
     - Cores escuras predominam no fundo, enquanto textos brancos e coloridos destacam as informações.
     - O layout é centrado com uma largura fixa, garantindo que o conteúdo fique organizado e de fácil leitura.
   - **Interatividade Visual**:
     - Os botões de "Calcular", "Limpar" e "Voltar" têm efeitos de hover para melhorar a experiência do usuário.

3. **JavaScript (`script.js`)**
   - Controla toda a lógica da calculadora:
     - Captura os valores da altura e do peso.
     - Realiza o cálculo do IMC.
     - Exibe o resultado e a classificação correspondente.
     - Permite limpar os campos de entrada ou voltar para refazer o cálculo.
   - O script também impede o uso do ponto (`.`) como separador decimal nas entradas, aceitando apenas vírgulas para compatibilidade com o formato brasileiro.
   
### **Lógica de Cálculo e Classificação**
- **Cálculo do IMC**: O valor do IMC é calculado dividindo o peso pela altura ao quadrado, e o resultado é arredondado.
- **Classificação**:
  - **IMC < 18.5**: Magreza
  - **18.5 ≤ IMC < 24.9**: Normal
  - **25 ≤ IMC < 29.9**: Sobrepeso (Grau I)
  - **30 ≤ IMC < 39.9**: Obesidade (Grau II)
  - **IMC ≥ 40**: Obesidade Grave (Grau III)
  
  O script ajusta dinamicamente a cor do resultado de acordo com a classificação.

### **Interação com o Usuário**
- O usuário interage com dois blocos principais:
  1. **Formulário de Cálculo**: Onde insere a altura e o peso.
  2. **Resultado do IMC**: Onde vê o IMC calculado e sua classificação, além de uma tabela com as classificações de referência.
  
A interface é simples e direta, proporcionando uma boa experiência ao usuário para calcular seu IMC e entender a sua situação de saúde relacionada ao peso.

### **Conclusão**
Essa calculadora de IMC oferece uma maneira rápida e eficiente de calcular e visualizar o IMC, com uma interface amigável construída em **HTML, CSS e JavaScript**. O uso de cores e feedback dinâmico torna o aplicativo mais intuitivo, e a lógica por trás do cálculo do IMC é clara e fácil de entender.
