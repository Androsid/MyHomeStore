import { Component, Input, Output, EventEmitter } from '@angular/core';
 
export interface ITreeviewComponent {
    leaf: boolean;
    categoryName: string;
    trees: Array<ITreeviewComponent>;
    isExpanded?: boolean;
    categoryId?: string;
  }
 
  @Component({
    selector: 'tree-view',
    templateUrl: "tree.component.html",
    
    styleUrls: ["./tree.component.css"]
  })
 
export class TreeComponent {
    @Input() SendTrees: Array<ITreeviewComponent>;    // Список узлов на данном уровне
    @Input() SelectedNode: ITreeviewComponent;        // Выбранный пользователем узел

    @Output() onSelectedChanged: EventEmitter<ITreeviewComponent> = new EventEmitter<ITreeviewComponent>();   // Смена выбранного пользователем узла
    @Output() onRequestNodes: EventEmitter<ITreeviewComponent> = new EventEmitter<ITreeviewComponent>();      // Запрос узлов при необходимости
    
    constructor(){}

    onSelectNode(node: ITreeviewComponent) {
        this.onSelectedChanged.emit(node);
      }

      onRequestLocal(node: ITreeviewComponent) {
        this.onRequestNodes.emit(node);
      }
   
      onExpand(node: ITreeviewComponent) {
        if(node.leaf)
        {
            node.isExpanded = !node.isExpanded;
            if (node.isExpanded && (!node.trees || node.trees.length === 0)) {
              this.onRequestNodes.emit(node);
            }
        }
      }
}