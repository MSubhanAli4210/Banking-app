import { Schema, model } from "mongoose";

const depositSchema = new Schema( {
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

  const Deposit = model("Deposit", depositSchema, "deposits");
  export default Deposit;