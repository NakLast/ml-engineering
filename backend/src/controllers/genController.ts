import { Request, Response, NextFunction } from "express";
// import { items } from "../models/item";
import { Gen } from "../models/gen";
import axios from "axios";



// Create an item

// Read all items
export  const  getGenerateStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post("http://sglang:30000/v1/chat/completions", {
       "model":"google/gemma-2-2b-it",
       "messages": [{"role": "user", "content": `
        คุณคือนักเขียนนิยายโรแมนติกที่มีฝีมือในการสร้างเรื่องราวความรักที่อบอุ่นหัวใจและน่าประทับใจ
          ผู้ใช้จะส่งรายละเอียดเพิ่มเติมมาให้ เช่น ตัวละครหลัก สถานที่ หรือธีมเรื่อง
          โปรดเขียนนิยายโรแมนติกที่สวยงาม อารมณ์ลึกซึ้ง และน่าติดตาม โดยมีองค์ประกอบดังนี้:
          - ตัวละครหลักและบุคลิกของพวกเขา
          - ฉากและบรรยากาศของเรื่อง
          - ช่วงเวลาที่มีทั้งความสุขและความท้าทายทางความรัก
          - ฉากโรแมนติกที่ตราตรึงใจ
          เริ่มเขียนนิยายเรื่องนี้เป็นภาษาไทยโดยอิงจากข้อมูลที่ได้รับ:
        ${prompt}`}]
        });
    res.send(response.data.choices[0].message.content);

  } catch (error) {
    next(error);
  }
};


// Edit an item

// Delete an item
