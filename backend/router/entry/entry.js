import express from "express";
import Entry from "../../model/entry.js";
import { v4 as uuidv4 } from 'uuid';
import joi from "joi"
const router = express.Router();



router.post("/add", async (req, res, next) => {
    const { body: { entry } } = req
    const post = new Entry(entry)
    const uid = uuidv4();

    // const titleS = entry.title
    // const entryS = entry.entry
    // const authorS = entry.author


    if (!entry.title || !entry.entry) return res.status(400).json({ message: "Hata Boş içerik gönderilemez !" })
    // if (authorvalidation || titleValidation || entryValidation){ return res.status(400).json({ message: "Adam akılı entry gir sikerim belanı" })}

    console.log(entry);
    post.id = uid

    post.save().then((data) => res.status(200).json({ entry: { data } }))


});

export default router;
