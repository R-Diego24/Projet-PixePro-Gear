import { Injectable } from '@angular/core';

export interface ReassuranceItem {
  icon: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReassuranceService {
  private items: ReassuranceItem[] = [
    { 
      icon: "icon-rea fa-solid fa-rotate-left", 
      title: "Achetez en toute confiance",
      text: "Nos produits que nous offrons une politique de retour gratuit sous 30 jours."
    },
    { 
      icon: "icon-rea fa-solid fa-shield-heart", 
      title: "Tranquillité d'esprit garantie",
      text: "Chaque appareil photo vient avec une garantie complète de 12 mois."
    },
    { 
      icon: "icon-rea fa-solid fa-thumbs-up", 
      title: "Votre satisfaction, notre mission",
      text: "Chez PixePro, votre bonheur est au cœur de nos préoccupations."
    },
    { 
      icon: "icon-rea fa-solid fa-chart-line", 
      title: "Rejoignez une communauté en croissance",
      text: "Grâce à la confiance et au soutien de nos clients, PixePro continue de grandir chaque jour."
    }
  ];

  getItems(): ReassuranceItem[] {
    return this.items;
  }
}
