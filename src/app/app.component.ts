import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isChecked;
  toggle = false;
  data = [];
  accessCheck: boolean[] = [];
  primaryCheck: boolean[] = [];
  tableData = [
    {
      company: 'xyz',
      access: false,
      primary: true,
      cin: '456378',
      status: 'Open',
    },
    {
      company: 'abc',
      access: true,
      primary: false,
      cin: '87654',
      status: 'Open',
    },
    {
      company: 'wdc',
      access: false,
      primary: true,
      cin: '400087',
      status: 'Open',
    },
  ];
  updateAccessCheck() {
    this.tableData.map((x) => {
      this.accessCheck.push(x.access);
    });
  }
  update() {
    this.toggle = !this.toggle;
    // alert(this.isChecked)
  }
  submit() {
    console.log(this.data, 'data');
  }
  checkbox(value, id) {
    console.log(id);
    this.data.push(this.tableData[id]);
    console.log(this.data);
  }
}
