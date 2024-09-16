O **Gerador de Senha** funciona da seguinte maneira:

#### Interface

![gerador-de-senha](./img/gerador-de-senha.png)

### 1. **Interface (index.html)**:

- A página contém um formulário de registro onde o usuário pode inserir seu nome, e-mail e criar uma senha.
- Existe uma opção que permite ao usuário gerar uma senha segura, clicando no link "Clique aqui" ao lado do campo de senha.
- Ao clicar, um painel aparece com opções para configurar a senha, como:
  - **Número de caracteres**: Definido em 10 por padrão.
  - **Incluir letras**: Opção marcada por padrão.
  - **Incluir números**: Também marcada por padrão.
  - **Incluir símbolos**: Marcação padrão.
- Após configurar, o usuário clica no botão "Criar senha" para gerar a senha com base nas opções selecionadas.
- A senha gerada é exibida, e o usuário pode clicar no botão "Copiar" para copiar a senha diretamente para a área de transferência.

### 2. **Lógica (script.js)**:

- **Geração da Senha**:
  - São utilizadas funções para gerar caracteres aleatórios:
    - **Letras**: Minúsculas e maiúsculas.
    - **Números**: De 0 a 9.
    - **Símbolos**: Caractere especial, como `!@#$%`.
  - A senha é gerada com base nas opções que o usuário escolhe.
  - O número de caracteres da senha é ajustável até um máximo de 25.
- **Copiar Senha**:
  - Depois de gerar a senha, o usuário pode clicar no botão "Copiar", que usa a API do navegador para copiar a senha gerada para a área de transferência.

### 3. **Estilo (style.css)**:

- A página tem um layout moderno com cores vibrantes e utiliza fontes da Google (Montserrat).
- O formulário e a área de geração de senha possuem animações suaves ao aparecer e desaparecer.
- A senha gerada é exibida de maneira clara, e o botão de cópia muda de texto para "Senha copiada com sucesso" por um curto período após a ação.

### Resumo do Fluxo:

1. O usuário preenche o formulário ou opta por gerar uma senha segura.
2. Configura os parâmetros da senha (número de caracteres, inclusão de letras, números, símbolos).
3. Gera e visualiza a senha gerada.
4. Copia a senha para a área de transferência e pode utilizá-la para registrar sua conta.
