# ml-engineering | AI For Thai Quizz

## Requirements

- Docker
- GPU with VRAM > 6GB (required to run sglang)
- Hugging Face CLI


---

## Project Overview

This project leverages the AI model `google/gemma-2-2b-it` from Hugging Face to generate Novel Story.

---

## Getting Started

### 1. Request Access to the Model

Visit the model page:  
[https://huggingface.co/google/gemma-2-2b-it](https://huggingface.co/google/gemma-2-2b-it)  
Click **Request Access** to gain permission to use this model.

### 2. Authenticate Hugging Face CLI

Generate an Access Token from your Hugging Face account. Then run the following command in your terminal:

```bash
huggingface-cli login
```
 then fill token that u got before this Step.


### 3. Clone the Repository

```bash
git clone https://github.com/NakLast/ml-engineering.git
cd ml-engineering
```
then start your service by
```bash
docker compose up -d
```
### 4. Visit http://localhost:4173 to test our aplication.