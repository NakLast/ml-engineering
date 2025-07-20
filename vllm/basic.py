from vllm import LLM, SamplingParams

prompt = [
    "Hello, my name is",
    "The president of the United States is",
    "The capital of France is",
    "The future of AI is",
]

sampling_params = SamplingParams(temperature=0.7, top_p=0.95)
llm = LLM("facebook/opt-125m")

output = llm.generate(prompt, sampling_params)

for output in output:
    prompt = output.prompt
    generated_text = output.outputs[0].text
    print(f"Prompt: {prompt!r}, Generated text: (generated_text!r)", "\n\n")