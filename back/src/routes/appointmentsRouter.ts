import { Router } from "express";
import {
  cancel,
  getAllAppointments,
  getAppointmentsById,
  schedule,
} from "../controllers/appointmentsControllers";
const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:appId", getAppointmentsById);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:appId", cancel);

export default appointmentsRouter;
