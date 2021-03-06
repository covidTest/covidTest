import { Table, Model, Column, PrimaryKey, DataType, ForeignKey } from "sequelize-typescript";
import Teststation from './Teststation';




export interface IAppointment{
  id: string
  teststation: string
  timeslot: string
  // ToDo add creator as part of booking
  // creator: string
  // ToDO must be filtered based on creator to ensure no visibility
  patientIdentifier: string

}

@Table({modelName: 'appointments'})
class Appointment extends Model<IAppointment> {

  @PrimaryKey
  @Column
  id: string

  @Column
  @ForeignKey(() => Teststation)
  teststation: string


  @Column({type: DataType.DATE})
  timeslot: string

  @Column
  patientIdentifier: string

}

export default Appointment
