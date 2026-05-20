import { Schema, model } from "mongoose";

const withdrawSchema = new Schema( {
    amount: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    }
  });

  const Withdraw = model("Withdraw", withdrawSchema, "withdraws");
  export default Withdraw;