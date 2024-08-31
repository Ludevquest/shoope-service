# 🛠️ Shopee Medição de Imagem

Este é um projeto de API para o processamento de imagens e extração de informações de medições (como água e gás) utilizando a API Gemini do Google. A aplicação permite fazer upload de imagens em formato base64, processá-las para extrair informações de medições e gerenciar essas medições em um banco de dados PostgreSQL.

## 📑 Tabela de Conteúdos
- 🚀 [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- ⚙️ [Configuração do Ambiente](#%EF%B8%8F-configuração-do-ambiente)
  - 🔧 [Pré-requisitos](#-pré-requisitos)
  - 💻 [Instalação](#-instalação)
  - 🔐 [Configuração](#-configuração)
- 📚 [Uso](#-uso)
  - 🔌 [Endpoints](#-endpoints)
  - 🧪 [Testes](#-testes)
- 🚢 [Deploy](#-deploy)
- 📜 [Licença](#-licença)

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Docker
- Google Cloud Vision (API Gemini)

## ⚙️ Configuração do Ambiente

### 🔧 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- Uma conta no [Google Cloud](https://cloud.google.com/) com acesso à API Gemini

### 💻 Instalação

Clone este repositório:

```bash
git clone https://github.com/Ludevquest/shoope-service.git
cd shoope-service
