export const products = [
    {
      id: 1,
      image: require("./assets/images/ring1.jpg"),
      title: "Pierścionek z rubinem",
      details: { size: 16, kamień: "rubin", kruszec: "białe złoto" },
      cena: "899 zł",
      inStock: 3,
      rates: [
        { text: "Super! Rozmiar w porządku, wykonanie na najwyższym poziomie.", user: "Kate" },
        { text: "Pięknie wygląda na palcu. Polecam.", user: "Anna" },
      ],
    },
    {
      id: 2,
      image: require("./assets/images/ring3.jpg"),
      title: "Pierścionek z turkusem",
      details: { size: 14, kamień: "turkus", kruszec: "białe złoto" },
      cena: "1099 zł",
      inStock: 1,
      rates: [],
    },
    {
      id: 3,
      image: require("./assets/images/ring2.jpg"),
      title: "Pierścionek z diamentem",
      details: { size: 16, kamień: "diament", kruszec: "białe złoto" },
      cena: "1799 zł",
      inStock: 0,
      rates: [],
    },
  ]