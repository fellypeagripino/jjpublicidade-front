# JJ Publicidade - Front-end (Fase 2)

Front-end em Angular que consome a API REST da Fase 1, com CRUD de clientes (listar, cadastrar, editar e excluir) e navegação por rotas.

## Identificação

- **Aluno:** Fellype Gabriel Agripino dos Santos
- **Matrícula:** 2525050044
- **Turma:** 7
- **Curso:** Análise e Desenvolvimento de Sistemas - UNIFACISA
- **Competência:** Integrar interfaces web e serviços web
- **Professor:** Jonathan de Souza Lima
- **Entrega:** Fase 2 (individual)

## Repositórios

- Back-end (API Spring Boot): https://github.com/fellypeagripino/jjpublicidade-api
- Front-end (Angular): https://github.com/fellypeagripino/jjpublicidade-front

## Como rodar

1. Subir a API (Spring Boot) em `http://localhost:8080`.
2. Neste projeto, instalar as dependências: `npm install`
3. Iniciar o front: `ng serve`
4. Abrir `http://localhost:4200`

## Rotas

- `/` - página inicial
- `/clientes` - lista e formulário de clientes (GET, POST, PUT e DELETE)

## Estrutura

- `models/` - interface `Cliente`
- `services/` - `ClienteService` (chamadas HTTP à API)
- `clientes/`, `home/`, `header/` - componentes
