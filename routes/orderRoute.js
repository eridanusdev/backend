import express from "express";
import { placeOrder, userOrders, allOrders, updateStatus, placeOrderMpesa, mpesaWebhook, cancelOrder, confirmPayment } from "../controllers/orderControllers.js";
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter = express.Router();

// <--------Admin feautures---------->
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// <--------Payment Feautures---------->
orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/mpesa", authUser, placeOrderMpesa)
orderRouter.post("/mpesa-webhook", authUser, mpesaWebhook)
orderRouter.post("/confirmpayment", authUser, confirmPayment)


// <----------User Feautures----------->
orderRouter.post("/userorders", authUser, userOrders)
orderRouter.post("/cancelorder", authUser, cancelOrder)


export default orderRouter;



