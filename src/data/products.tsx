export interface Product {
  title: string;
  id: number;
  brand: string;
  name: string;
  img: string;
  price: number;
  status: string;
  deliver: string;
  description: string;
  color: string;
}

export const Products: Product[] = [
  {
    title: "T-shirts",
    id: 1,
    brand: "Design by Chameleone",
    name: "Flames",
    img: "WTLeft.png",
    price: 199,
    status: "Finns i lager",
    deliver: "1-3 dagar",
    description: "T- shirt branding by Chameleone, Cotton 98 % Elastan 2%",
    color: "white",
  },
  {
    title: "T-shirts",
    id: 2,
    brand: "Design by Chameleone",
    name: "Harley Quinn",
    img: "WTRight.png",
    price: 199,
    status: "Finns i lager",
    deliver: "1-3 dagar",
    description: "T- shirt branding by Chameleone, Cotton 98 % Elastan 2%",
    color: "white",
  },
  {
    title: "T-shirts",
    id: 3,
    brand: "Design by Chameleone",
    name: "Flames",
    img: "BTLeft.png",
    price: 199,
    status: "Finns i lager",
    deliver: "1-3 dagar",
    description: "T- shirt branding by Chameleone, Cotton 98 % Elastan 2%",
    color: "black",
  },
  {
    title: "T-shirts",
    id: 4,
    brand: "Design by Chameleone",
    name: "Summer",
    img: "BTRight.png",
    price: 199,
    status: "Finns i lager",
    deliver: "1-3 dagar",
    description: "T- shirt branding by Chameleone, Cotton 98 % Elastan 2%",
    color: "black",
  },
  {
    title: "Fragrances",
    id: 5,
    brand: "Interiör Huset",
    name: "Lilly of the Valley",
    img: "lilyOfTheValley.png",
    price: 20,
    status: "Finns i lager",
    deliver: "1-3 dagar",
    description:
      "Doftpåse med en doft av sagolik liljekonvalj. En doftpåse kan man kan ha på alla ställen i hemmet där man önskar lite fräsch doft och en extra hemtrevlig atmosfär. Doften håller i högst 3 månader. Påsen innehåller en liten mängd olja då det därför är viktigt att låta den bli kvar i plasthöljet. Tycker du att doftpåsen börjar tappa doft kan du öpnna en lucka i plasten. Tar man bort hela plastfodralet så får man inte glömma att den kan ge oljefläckar. Kika runt bland våra underbara doftpåsar och hitta din favorit ",
    color: "",
  },
];
