import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Mall',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['description'] = 'This is an about page...';
    viewData['author'] = 'Developed by Caio';
    viewData['title'] = 'About us - Online Mall';
    viewData['subtitle'] = 'About us';
    return {
      viewData: viewData,
    };
  }
}
