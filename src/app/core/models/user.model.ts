export interface UserModel {
  user: string;
  whatsapp: string;
  endDate: Date;
  active: boolean;
}

export interface DataModel {
  data: UserModel;
}
