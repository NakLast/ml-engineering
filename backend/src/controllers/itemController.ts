import { Request, Response, NextFunction } from "express";
// import { items } from "../models/item";

// Create an item

// Read all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("✅ Backend is running");
  } catch (error) {
    next(error);
  }
};

// Edit an item

// Delete an item
