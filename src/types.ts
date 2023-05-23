export interface PersonalData {
  name: string;
  lastName: string;
  birthdate: string;
  email: string;
}

export interface AccessData {
  username: string;
  password: string;
  repeatPassword: string;
  isSavedPassword: boolean;
}
