import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    user_id = user_id.toString();
    const findUser = this.usersRepository.findById(user_id);

    if (findUser) {
      if (findUser.admin) return this.usersRepository.list();

      throw new Error("User not admin");
    } else throw new Error("User not exists");
  }
}

export { ListAllUsersUseCase };
