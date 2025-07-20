# ml-engineering


Requirement : Docker

*** Descriptions for this project ***

## Backend

This backend is used ["express"](https://expressjs.com/en/starter/installing.html), node version 22.14.0 and ["pnpm"](https://pnpm.io/installation)

### Getting started

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

## Frontend

This frontend is used ["vite"](https://vite.dev/guide/), node version 22.14.0 and ["pnpm"](https://pnpm.io/installation)

### Getting started

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

## VLLM

This vllm is used "uv"

### Installation

uv provides a standalone installer to download and install uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

When uv is installed via the standalone installer, it can update itself on-demand:

```bash
uv self update
```

To enable shell autocompletion for uv commands, run one of the following:

```bash
echo 'eval "$(uv generate-shell-completion zsh)"' >> ~/.zshrc
```

### Set up using python

#### Create a new Python environment

```bash
uv venv --python 3.12 --seed
```

### Getting started

Active virtual environment:

```bash
source .venv/bin/activate
```

Install vllm:

```bash
uv pip install vllm
```

Run test VLLM:

```bash
python <your-file-name>.py
```

Start serve VLLM:

```bash
vllm serve <your-model-path>
```

## Contributing

1. Extrabranch from `develop` branch
2. Success develop from your branch, submit PR to `develop` branch
3. Wait for review and merge
4. Test merge code on `develop` branch
5. Submit PR to `main` branch
