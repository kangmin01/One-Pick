import { Router } from "express";
import is from "@sindresorhus/is";

import { orderService } from "../services";

const orderRouter = Router();

orderRouter.post("/orders/register", async (req, res, next) => {
  try {
    // Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const orderName = req.body.orderName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;

    const newOrder = await orderService.addOrder({
      orderName,
      address,
      phoneNumber,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});

//주문 전체조회
orderRouter.get("/orders", async function (req, res, next) {
  try {
    const orderList = await orderService.getOrders();
    res.status(200).json({ error: null, data: orderList });
  } catch (error) {
    next(error);
  }
});

//주문 삭제
orderRouter.delete("/orders/:id", async function (req, res, next) {
  const orderId = req.params.id;

  console.log(`파람 값확인: ${orderId}`);

  const deleteOrderInfo = await orderService.deleteOrder(orderId);

  return res.status(200).json({ error: null, data: deleteOrderInfo });
});

//주문 수정
orderRouter.patch("/orders/:id", async function (req, res, next) {
  try {
    const orderId = req.params.id;

    const orderName = req.body.orderName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;

    const toUpdate = {
      ...(orderName && { orderName }),
      //address,
      ...(address && { address }),
      ...(phoneNumber && { phoneNumber }),
    };

    const patchOrderInfo = await orderService.patchOrder(orderId, toUpdate);

    return res.status(201).json(patchOrderInfo);
  } catch (error) {
    next(error);
  }
});

export { orderRouter };
