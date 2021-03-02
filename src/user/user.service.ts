import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(createUserDto: any) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  register(createUserDto: { name: string; email: string }) {
    return createUserDto;
  }

  login(loginUserDto: { password: string; email: string }) {
    return {
      email: loginUserDto.email,
      id: '1'
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
