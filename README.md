# ml-engineering | AI For Thai Quizz

## Requirements

- Docker
- GPU with VRAM > 6GB (required to run sglang)
- Hugging Face CLI


---

## Project Overview

This project leverages the AI model `google/gemma-2-2b-it` from Hugging Face to generate Novel Story.
### Quiz Description
our team 105Lab, answers AI for Thai quiz by

(1) using ExpresssJS as API1 for accepting user novel generation request input parameters

(2) using SGLang as API2 to receive LLM request from API1,  we use docker image of SGLang directly ,  see the script in docker-compose.yml

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

---


## Extra
If u want to test our API
## API Endpoints

Below are the available API endpoints in this project.
### API Generate Novel Story
**Description**:  
 API นี้จะแต่งนิยายให้โดยกรอกตัวละคร หรือฉากที่ต้องการ

---

### 1. Postman Method
### `POST to  http://localhost:3001/api/genstory`



**Request Body** (`application/json`):

```json
{
    "prompt":" จ๊อบและเกมส์รักกัน "
}
```

### 2. Curl Method

```bash
curl -X POST http://localhost:3001/api/genstory -H "Content-Type: application/json" -d "{\"prompt\":\"Defined Name of Character or anything u want to have it in Novel Story\"}"

```

ผลลัพทธ์ของทั้ง 2 method จะตอบกลับมาแบบนี้
```result

**บทที่ 1: รู้จักกันในเกม**

แฮร์รี่ โอลิเวอร์ เป็นนักจ๊อบที่ติดเกมอย่างรุนแรง จนไม่มีเวลาสำหรับชีวิตจริง การเรียน การฝึกซ้อม
และงานอดิเรกก็ไม่ได้เป็นเรื่องสำคัญเท่ากับการเล่นเกม และนี่คือเรื่องราวของเขา

เขาเก่งกาจในการเล่นเกมอย่างเหลือเชื่อ การต่อสู้ในเกมนั้นเป็นเรื่องง่ายมากสำหรับเขา
และเกมนี้เป็นโลกที่เขาสามารถผ่อนคลายและทำอะไรที่เขาชอบ

วันหนึ่ง แฮร์รี่ ได้รับโอกาสในการเข้าร่วมโปรแกรมจ๊อบสุด elite ซึ่งรวมถึงการแข่งขันเกมระดับโลก แฮร์รี่
รู้สึกตื่นเต้นและหวังว่าจะเป็นโอกาสพิเศษสำหรับเขา แต่เขามองเห็นความท้าทายในความฝัน

**บทที่ 2: เกมนี้มีหัวใจ**

แน่นอนว่าแฮร์รี่ ไม่ใช่คนธรรมดา เขามีความสามารถในการเข้าหาและรู้จักเพื่อนได้ง่ายๆ
และเขาสามารถสร้างความสัมพันธ์อันแสนสนิทได้ในช่วงเวลาอันสั้น

เขาได้พบกับแซม อาจจะไม่ใช่คนที่สนิทมากนัก แต่แซมมีความมุ่งมั่นและความสามารถที่ชัดเจน
เขาเป็นคนที่มีความสามารถในการแก้ปัญหาและคิดอย่างแปลกใหม่

ด้วยความรักความสนิทสนมและความไว้วางใจ แฮร์รี่และแซมจึงร่วมกันสู้ในเกมที่ยากเย็นและอันตราย

**บทที่ 3: ระหว่างเกมและความสัมพันธ์**

เกมนี้ไม่เพียงแต่เป็นการแข่งขัน แต่ยังเป็นการแสดงให้เห็นถึงความสัมพันธ์ของแฮร์รี่และแซม

ความสัมพันธ์ของพวกเขาเริ่มต้นจากการร่วมมือในการเล่นเกม แต่ซับซ้อนขึ้นเรื่อย ๆ
และแซมก็เริ่มเห็นความมุ่งมั่นและความสามารถของแฮร์รี่

การแข่งขันในเกมนี้กลายเป็นเรื่องสำคัญกว่าการแข่งขัน แฮร์รี่และแซมต้องเรียนรู้ที่จะทำงานร่วมกันเพื่อประสบความสำเร็จ

**บทที่ 4: ความจริงที่ซ่อนอยู่**

การแข่งขันในเกมนี้มีอะไรมากกว่าแค่ความชำนาญ และความสามารถ

แม้แฮร์รี่จะเก่งกาจในการเล่นเกม แต่เขาก็ยังมีจุดอ่อนที่เขาต้องต้องเผชิญ

แซมเองก็มีปัญหาบางอย่างที่เขามีความซับซ้อนและต้องหาทางออก

**บทที่ 5: การเปลี่ยนแปลง**

ความสัมพันธ์ระหว่างแฮร์รี่และแซม ได้เปลี่ยนไป

ความสัมพันธ์ที่เริ่มต้นจากการร่วมมือในการเล่นเกมกลายเป็นความสัมพันธ์ที่ซับซ้อนและน่าสนใจ

**บทที่ 6: ความสำเร็จ**

แฮร์รี่และแซม สามารถสร้างความสำเร็จในเกมนี้ได้

พวกเขาได้เรียนรู้ว่าการทำงานร่วมกันและความรักช่วยให้พวกเขาผ่านอุปสรรคได้

**บทที่ 7: ความรู้ดีกว่าเกม**

แม้ว่าการแข่งขันในเกมจะจบลง แต่ความสัมพันธ์ของแฮร์รี่และแซม จะยังคงอยู่ในสายตาทันที

เกมนี้เป็นเพียงเริ่มต้นของความสัมพันธ์ที่ยิ่งใหญ่

**บทสุดท้าย:**

ผู้คนต่างก็เห็นว่าแฮร์รี่และแซม เป็นคู่รักที่น่าสนใจ

การแข่งขันในเกมนี้เป็นเพียงจุดเริ่มต้น
```