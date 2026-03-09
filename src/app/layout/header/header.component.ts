import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  list?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  standalone: false
})
export class HeaderComponent {
  menuList: MenuItem[] = [
    {
      label: '首页',
    },
    {
      label: '全部课程',
      list: [
        { label: '课程1' },
        { label: '课程2' },
        { label: '课程3' }
      ]
    }
  ];
}
