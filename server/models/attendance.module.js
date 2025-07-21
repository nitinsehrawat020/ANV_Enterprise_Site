import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.ObjectId, ref: "worker" },
  attendanceData: [
    {
      month: { type: String },
      summary: {
        full_present: { type: Number, default: 0 },
        night: { type: Number, default: 0 },
        half_day: { type: Number, default: 0 },
        present: { type: Number, default: 0 },
        absent: { type: Number, default: 0 },
      },
      payment: { type: Object, default: null },
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
