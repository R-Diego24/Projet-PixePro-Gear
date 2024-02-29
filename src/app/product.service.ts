import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  brand: string;
  logo: string;
  model: string;
  image: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products = [
    { 
      id: 1, 
      brand: "Sony", 
      logo: "../../../assets/img/sony.png", 
      model: "A7", image: "../../../assets/img/sony-a7.png", 
      description: "Premier hybride à capteur plein format 24 x 36 mm, l'Alpha 7 se décline en version normale, équipé d'un capteur 24,3 Mpix, et dans une version R, pourvue d'un capteur de 36 Mpix dépourvu de filtre passe bas. Embarquant un viseur électronique OLED et un écran orientable, l'Alpha 7 est la synthèse des reflex professionnels à grands capteurs et des hybrides doués en rafale et en vidéo.", 
      price: 550 
    },
    { 
      id: 2, 
      brand: "Sony", 
      logo: "../../../assets/img/sony.png", 
      model: "A6600", 
      image: "../../../assets/img/sony-a6600.png", 
      description: "L'α6600 réunit toutes les fonctionnalités dont vous pouvez avoir besoin quelles que soient les circonstances : une mise au point automatique rapide, un stabilisateur d'image fiable, une qualité d'image remarquable, une batterie haute capacité et des outils performants pour la réalisation de films 4K HDR (HLG)", 
      price: 1159 
    },
    { 
      id: 3, 
      brand: "Sony", 
      logo: "../../../assets/img/sony.png", 
      model: "A9", 
      image: "../../../assets/img/sony-a9.png", 
      description: "Sony propose avec l'Alpha A9 un appareil dont la domination technique est totale : sa rafale de 20 i/s en 24 Mpix (tenue sur 12 secondes !) est du jamais vu, de même que l'absence de passage au noir entre chaque cliché, les 699 collimateurs AF sélectionnables ou encore des performances vidéo qui éclipsent totalement des boîtiers pros comme les Nikon D5 et autre Canon EOS 1DX Mark II.", 
      price: 1955 
    },
    { 
      id: 4, 
      brand: "Sony", 
      logo: "../../../assets/img/sony.png", 
      model: "A7c", 
      image: "../../../assets/img/sony-a7c.png", 
      description: "Mélange électronique du capteur de l'A7 Mark III, de l'électronique (processeur) de l'A7R Mark IV, etc. l'Alpha A7c est un pot pourri technique de la gamme Alpha condensé dans le plus petit boîtier plein format stabilisé. De quoi se lancer dans la photo de rue avec la qualité du plein format.", 
      price: 1699 
    },
    { 
      id: 5, 
      brand: "Sony", 
      logo: "../../../assets/img/sony.png", 
      model: "A1", 
      image: "../../../assets/img/sony-a1.png", 
      description: "Sony repousse encore les limites de l'imagerie conventionnelle grâce à des technologies innovantes, combinant résolution et rapidité à un fonctionnement intuitif. L'α1 offre de nouvelles dimensions en matière de performances d'image, mais aussi de workflow, donnant à l'utilisateur toute liberté créative.", 
      price: 7299 
    },
    { 
      id: 6, 
      brand: "Sigma", 
      logo: "../../../assets/img/sigma.png", 
      model: "FP", 
      image: "../../../assets/img/sigma-fp.png", 
      description: "En faisant de la réalisation de ces trois concepts une priorité absolue et intangible, SIGMA n'a retenu que les éléments et les mécanismes qui étaient vraiment indispensables pour faire du SIGMA fp l'incarnation de l'appareil numérique totalement nouveau que SIGMA veut offrir au monde aujourd'hui.", 
      price: 1899 
    },
    { 
      id: 7, 
      brand: "Nikon", 
      logo: "../../../assets/img/nikon.png", 
      model: "3200", 
      image: "../../../assets/img/nikon-3200.png", 
      description: "Le Nikon D3200 est un boîtier reflex numérique Nikon possédant un capteur au format DX, lancé le 19 avril 2012 . Il fait appel à un capteur de 24,2 millions de pixels, d'une densité en forte hausse par rapport aux 14,2 millions de pixels du D3100.", 
      price: 215 
    },
    { 
      id: 8, 
      brand: "Canon", 
      logo: "../../../assets/img/canon.png", 
      model: "R7", 
      image: "../../../assets/img/canon-r7.png", 
      description: "Canon, que l'on attendait sur le marché des hybrides APS-C en monture RF, livre l'EOS R7. Ce boîtier ambitionne de prendre la relève de l'ancien et très apprécié reflex expert EOS 7D Mark II. Un sacré défi sur un tel segment.", 
      price: 1599 
    },
    { 
      id: 9, 
      brand: "Canon", 
      logo: "../../../assets/img/canon.png", 
      model: "R5", 
      image: "../../../assets/img/canon-r5.png", 
      description: "Oubliez ce que vous savez sur les appareils photo hybrides. Que vous souhaitiez créer des photos, des vidéos ou un mélange des deux, les performances exceptionnelles de l'EOS R5 révolutionneront votre créativité.", 
      price: 3999 
    },
    { 
      id: 10, 
      brand: "Canon", 
      logo: "../../../assets/img/canon.png", 
      model: "EOS",
      image: "../../../assets/img/canon-eos.png", 
      description: "Les appareils photo reflex de Canon offrent une plage dynamique étendue pour préserver les détails dans les zones sombres et lumineuses, des images à faible niveau de bruit directement depuis l'appareil photo et une faible profondeur de champ pour des portraits magnifiques. Ils sont conçus pour conférer des résultats professionnels à chacune de vos prises de vue.", 
      price: 1399 
    }
  ];

  constructor() { }

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
