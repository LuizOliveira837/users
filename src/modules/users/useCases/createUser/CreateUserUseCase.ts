import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { User } from "../../model/User";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email, name }: IRequest): User | undefined {
    if (this.usersRepository.findByEmail(email))
      throw new Error(`User ${email} already exists`);

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
