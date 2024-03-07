import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import ScheduleAppointmentDto from "../interfaces/ScheduleAppointmentDto";
import { userModel } from "./userServices";

const appointmentModel = AppDataSource.getRepository(Appointment);

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await appointmentModel.find();
  return allAppointments;
};

export const getAppointmentByIdService = async (
  appId: number
): Promise<Appointment> => {
  const appointment: Appointment | null = await appointmentModel.findOneBy({
    id: appId,
  });
  if (!appointment) {
    throw Error("Turno inexistente");
  }
  return appointment;
};

export const cancelAppointmentService = async (
  appId: number
): Promise<void> => {
  const appointment: Appointment | null = await appointmentModel.findOneBy({
    id: appId,
  });
  if (!appointment) {
    throw Error("Turno inexistente");
  }
  appointment.status = "cancelled";
  await appointmentModel.save(appointment);
};

export const scheduleAppointmentService = async (
  scheduleTurnDto: ScheduleAppointmentDto
): Promise<Appointment> => {
  const newAppointment: Appointment = appointmentModel.create(scheduleTurnDto);
  await appointmentModel.save(newAppointment);
  const user: User | null = await userModel.findOneBy({
    id: scheduleTurnDto.userId,
  });
  if (!user) {
    throw Error("Turno inexistente");
  }
  newAppointment.user = user;
  await appointmentModel.save(newAppointment);
  return newAppointment;
};
