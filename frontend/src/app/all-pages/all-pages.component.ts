import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Page } from '../page/page.component';
import { GetPageService } from '../service/data/get-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-pages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './all-pages.component.html',
  styleUrl: './all-pages.component.css'
})
export class AllPagesComponent implements OnInit {

  pages: Page[] = [];
  message: string = '';

  constructor(
    private pageService: GetPageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.refreshPages();
  }

  refreshPages() {
    this.pageService.retrieveAllPages(1).subscribe(
      response => {
        console.log("Refresh is triggered.")
        console.log(response);
        this.pages = response;
      }
    )
  }

  deletePage(id: number) {
    console.log('delete page ${id}');
    this.pageService.deletePage(1, id).subscribe(
      response => {
        console.log(response);
        this.message = 'Delete of page ${id} Successful'
        this.refreshPages();
      }
    )
  }

  updatePage(id:number) {
    console.log('update ${id}');
    this.router.navigate(['a', id]);
  }

  addPage() {
    this.router.navigate(['a', -1]);
    // this.router.navigate(['a']);
  }

}
