import { Request, Response, NextFunction } from "express";
// import { items } from "../models/item";
import { Gen } from "../models/gen";
import axios from "axios";



// Create an item

// Read all items
export  const  getGenerateStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post("http://localhost:3000/v1/chat/completions", {
       "model":"google/gemma-2-2b-it",
       "messages": [{"role": "user", "content": `${prompt}`}]
        });
    res.send(response.data)

  } catch (error) {
    next(error);
  }
};


// Edit an item

// Delete an item
