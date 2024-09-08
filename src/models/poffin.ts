import mongoose, { Document, Schema } from "mongoose";

/**
 * Basic Schima for Poffin
 */
interface IPoffin {
  name: string;
  friendshipLoyalty: number;
}

const PoffinScheuma: Schema = new Schema<IPoffin>({
  name: {
    type: String,
    requred: true,
    unique: true,
    trim: true,
    minlength: 1,
    maxLength: 15,
  },
  friendshipLoyalty: {
    type: Number,
    requiredPaths: true,
    min: 0,
    max: 20,
  },
});

const Poffin = mongoose.model<IPoffin>("Poffin", PoffinScheuma);
export default Poffin;
