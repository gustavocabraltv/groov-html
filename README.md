# 📚 Sincronização do Projeto entre Duas Máquinas com Git

Este guia serve para sincronizar um repositório Git entre **duas máquinas diferentes** (por exemplo: notebook e desktop),
garantindo que você sempre esteja com os arquivos mais atualizados da última máquina em que trabalhou.

---

## ✅ Quando estiver começando em uma nova máquina:

### 1. Acesse o diretório do projeto

```bash
cd /caminho/do/projeto
```

### 2. Verifique se há alterações locais

Antes de atualizar com o conteúdo mais recente do GitHub, verifique se existem arquivos modificados localmente:

```bash
git status
```

Se houver arquivos modificados que ainda não foram commitados, use:

```bash
git stash
```

Isso salva suas alterações temporariamente e limpa a árvore de trabalho.

### 3. Atualize o projeto com o conteúdo do GitHub

```bash
git pull origin main
```

> Obs: substitua `main` por `master` ou o nome da branch que você estiver usando.

### 4. (Opcional) Restaure suas alterações locais (se você usou stash)

```bash
git stash pop
```

---

## 💡 Dicas úteis

- Sempre **faça commit e push** ao finalizar o trabalho em uma das máquinas.
- Sempre **faça pull** antes de começar em outra máquina.
- Evite trabalhar ao mesmo tempo em ambas as máquinas para não gerar conflitos.

---

## 🧪 Comando completo (avançado, se quiser automatizar)

```bash
git stash && git pull origin main && git stash pop
```

> Este comando guarda alterações locais, puxa as novas alterações do GitHub e depois restaura o que estava pendente.

---
