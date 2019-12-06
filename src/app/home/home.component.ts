import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { ElectronService } from '../core/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  titulo: string;
  white: Player;
  green: Player;
  classes: Object;

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void {
    this.titulo = "ScoreMark";
    this.white = new Player();
    this.green = new Player();
    this.classes = {
      "whiteScore": "",
      "greenScore": "",
      "greenPunition": "",
      "greenAdvantage": "",
      "whiteAdvantage": "",
      "whitePunition": ""
    }
  }

  fullScreen(): void {
    let win = this.electronService.remote.getCurrentWindow();
    win.setFullScreen(!win.isFullScreen());
  }

  handleClick(oEvent) {
    let id = this.getId(oEvent);
    this.classes[id] = (this.classes[id] === "" ? "blink_me" : "");

    switch (id) {
      case "whiteScore":
        break;
      case "greenScore":
        break;
      case "greenPunition":
        break;
      case "greenAdvantage":
        break;
      case "whiteAdvantage":
        break;
      case "whitePunition":
        break;
      default:
        break;
    }
  }
  private getId(oEvent): string {
    return oEvent.target.attributes["id"].value;
  }

  private getClass(id): string{
    return this.classes[id];
  }
}
