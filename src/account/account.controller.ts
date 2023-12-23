import { Controller, Get, Render, Req } from '@nestjs/common';
import { OrdersService } from 'src/models/orders.service';

@Controller('/account')
export class AccountController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/orders')
  @Render('account/orders')
  async orders(@Req() request) {
    const viewData = [];
    viewData['title'] = 'My Orders - Online Mall';
    viewData['subtitle'] = 'My orders';
    viewData['orders'] = await this.ordersService.findUserById(
      request.session.user.id,
    );
    return {
      viewData: viewData,
    };
  }
}
