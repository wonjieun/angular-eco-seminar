import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

  book = {
    btitle: 'Head First Design Patterns: 스토리가 있는 패턴 학습법',
    bauthor: '에릭 프리먼외 3명',
    bprice: 28000,
    bdate: '2005년 08월',
    bisbn: '89-7914-340-0',
    bimgurl: 'http://image.hanbit.co.kr/cover/_m_1340m.gif'
  };

  constructor() { }

  ngOnInit() {
  }

}
