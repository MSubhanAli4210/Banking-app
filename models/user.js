    import { Schema, model } from "mongoose";

    const userSchema = new Schema({
        fullName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        cnic: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    });

    const User = model("User", userSchema,"user");
    export default User;