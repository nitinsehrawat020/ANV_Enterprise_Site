import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.ObjectId, ref: "worker" },
  attendanceData: [
    {
      month: { type: String },
      data: [
        {
          date: { type: Date },
          value: {
            type: String,
            default: "",
          },
          site: {
            type: mongoose.Schema.ObjectId,
            ref: "site",
          },
        },
      ],
    },
  ],
});
const AttendanceModel = mongoose.model("attendance", attendanceSchema);
export default AttendanceModel;
