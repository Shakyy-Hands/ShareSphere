import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GetPageService } from '../service/data/get-page.service';
import { Page } from '../page/page.component';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  text: string = ''
  owner: number = 1
  id: any = 0

  page: Page = new Page(this.id, '', this.owner);

  // newPage: boolean = false

  constructor(
    private route: ActivatedRoute,
    private service: GetPageService,
    private router: Router,
  ) {}

  adjustHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on the scroll height
  }

// page text getting: ------------------------------------------------------------


ngOnInit() {
  this.id = this.route.snapshot.params['id'];
    console.log("On onit, id: ", this.id, ". It's type:", typeof this.id);
    console.log(this.text);
    if (this.id==-1) {
      // console.log("A new page is found.");
      console.log("id:", this.id, "-- page.id:", this.page.id);
      this.id = -1;
      // this.newPage = true;
    }
    // else {
    //   this.newPage = true;
    // }
    
    this.page = new Page(this.id, '', this.owner);

    if (this.id != -1) {
      console.log(" - - id != -1, should assign values to fields.")
      this.service.retrievePage(1, this.id).subscribe(
        data => { 
          console.log("received from service data", data);
          this.page = data;

          console.log("Page fields id, owner, text:", this.page.id, this.page.owner, this.page.text, this.page);
          this.text = this.page.text;
        }
        
      )
    }
    

  // // console.log(this.route.snapshot.params['name'])
  // this.owner = this.route.snapshot.params['owner'];
  // console.log("Printing from oninint")
  // // this.service.getText().subscribe((data: string) => {
  // //       this.text = data;
  // //     });

  // this.id = this.route.snapshot.params['id'];
  //   console.log("On onit, id: ", this.id, typeof this.id);
  //   if (this.id==-1) {
  //     this.id = -1;
  //   }
  //   this.page = new Page(this.id, this.owner, '');// Why not : new Todo(1, '', false, new Date())

  //   // if (this.id != -1) {
  //   //   this.service.retrieveTodo('28', this.id).subscribe(
  //   //     data => this.page = data
  //   //   )
  //   // }
}
// ngOnInit(): void {
//   this.textService.getText().subscribe((data: string) => {
//     this.text = data;
//   });
// }

// getPageText(owner: number) {
//   console.log("Printing from getPageText.")
//   // this.service.executeGetPageService(owner, 1).subscribe(
//   //   response => this.handleSuccessfulResponse(response),
//   //   error => this.handleErrorResponse(error)
//   // );
//   this.service.getText().subscribe((data: string) => {
//     this.text = data;
//   });
// }

handleSuccessfulResponse(response: any) {
  this.text = response.message
  console.log("Printing from successful.")
  console.log(response)
  console.log(response.message)
}

handleErrorResponse(error: any) {
  console.log("Printing from error.")
  this.text = error.error.message
}

savePage() {
  console.log("id: ", this.id, typeof this.id);
  console.log("text is --------", this.text)
  this.page.text = this.text;
    if (this.id == -1) { // === for objects & == for comparing primatives
      console.log("Sending create.")
      this.service.createPage(1, this.page).subscribe(
        data => {
          console.log("data:", data)
          this.router.navigate(['allPages'])
        }
      )
    } else {
      console.log("Sending update.")
      this.service.updatePage(1, this.id, this.page).subscribe(
        data => {
          console.log("data:", data)
          this.router.navigate(['allPages'])
        }
      )
    }
}

getPage() {
  this.service.retrievePage(1, this.id).subscribe(
    data => { 
      console.log("received from service data", data);
      this.page = data;

      console.log("Page fields id, owner, text:", this.page.id, this.page.owner, this.page.text, this.page);
      this.text = this.page.text;
    }
    
  )
}

  // name: string = '';
  // printedName: string = '';

  // printName() {
  //   this.printedName = this.name;
  //   console.log('Name:', this.name);
  // }

}
