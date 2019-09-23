const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();
const data = [{
        id: "prod1",
        title: "Product 1",
        price: 250,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod2",
        title: "Product 2",
        price: 150,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod3",
        title: "Product 3",
        price: 250,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod4",
        title: "Product 4",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod5",
        title: "Product 5",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod6",
        title: "Product 6",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod7",
        title: "Product 7",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod8",
        title: "Product 8",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod9",
        title: "Product 9",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    },
    {
        id: "prod10",
        title: "Product 10",
        price: 240,
        totalPrice: 0,
        amount: 0,
        image: "https://picsum.photos/300/300?image=0&&blur",
        inCart: false
    }
];
// get products
router.get("/", (req, res) => {
    res.end(JSON.stringify(data))
});

module.exports = router;