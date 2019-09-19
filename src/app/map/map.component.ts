import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private mapService: MapService
  ) { }

  zoom = 13;

  // initial center position for the map
  lat = 43.6510207612;
  lng = -79.4393667645;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      draggable: false

    }
  ];

  ngOnInit() {
    this.mapService.getMarkers('cad31095-cae1-49f4-bea8-78c42e2d92b7').subscribe( points => {
      this.markers = this.toMarkersArray(points);
      console.log(this.markers);
    });
  }

  toMarkersArray(data: any[]) {
    const tempMarkersArray: Marker[] = [];
    data.forEach(element => {
      tempMarkersArray.push(
        {
          lat: element.latitude,
          lng: element.longitude,
          draggable: false
      }
      );
    });
    return tempMarkersArray;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
