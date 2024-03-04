interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: "active" | "canceled";
  description: string;
}

export default IAppointment;
