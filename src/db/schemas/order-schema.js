import { mongoose } from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number, //프론트 단에서 번호 입력예시 01012345555
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    owner: [
      {
        //주문자 오브젝트아이디 저장,
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "user-schema", //populate
      },
    ],
  },
  {
    timestamps: true,
  }
);

export { OrderSchema };
