/**
 * Created by Inneasoft on 13/12/2016.
 */
export class Directory {
  name: string;
  children: [any];
  files: [any];
  expanded:boolean;
  checked:boolean;
  constructor(name,children,files) {
    this.name = name;
    this.files = files;
    this.children = children;
    this.expanded = false;
    this.checked = false;
  }
  toggle(){
    this.expanded = !this.expanded;
  }
  check(){
    let newState = !this.checked;
    this.checked = newState;
    this.checkRecursive(newState);
  }
  checkRecursive(state){
    this.children.forEach(d => {
      d.checked = state;
      d.checkRecursive(state);
    })
  }
}
