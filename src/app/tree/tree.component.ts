import { Component, OnInit } from '@angular/core';
import {Directory} from "./Directory";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  directories: [Directory];
  constructor() {
    let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
    let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    let summer2014 = new Directory('Summer 2014',[music],['image10.jpg','image20.jpg','image30.jpg']);
    let pics = new Directory('Pictures',[summer2014,fall2014],[]);
    this.directories = [pics];
  }

  ngOnInit() {
  }

}
