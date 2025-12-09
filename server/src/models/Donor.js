import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    group: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    availability: {
      type: String,
      default: "Available today",
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    donations: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

donorSchema.index({ group: 1, location: 1 });

donorSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    id: this._id.toString(),
    name: this.name,
    group: this.group,
    location: this.location,
    availability: this.availability,
    phone: this.phone,
    donations: this.donations,
  };
};

const Donor = mongoose.model("Donor", donorSchema);

export default Donor;
