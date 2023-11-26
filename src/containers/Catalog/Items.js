import React from "react";
import styles from "./Items.styled";
import Diamond from "../../Images/diamond1.jpeg";
import Rubin from "../../Images/rubin.png";
import Sapphire from "../../Images/Sapphire_Gem.jpg";
import Topaz from "../../Images/topaz.jpeg"
import Shpinel from "../../Images/sphinel.jpeg"
import Zirkon from "../../Images/zirkon.jpeg"
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    mark: "Diamond",
    carat: "1",
    image: Diamond,
    description: "Діаманти - це найтвердіший природний матеріал, відомий своєю блискучістю та чистотою. Вони використовуються для виготовлення коштовних прикрас і володіють великою блискучістю та спроможністю розсіювати світло.",
    price: 200,
  },
  {
    mark: "Rubin",
    carat: "0.8",
    image: Rubin,
    description: "Рубіни - це червоні корунди, які символізують страсть та кохання. Вони володіють багатством кольору та використовуються в коштовних прикрасах. Рубіни є одними з найдорожчих дорогоцінних каменів",
    price: 400,
  },
  {
    mark: "Sapphire",
        carat: "0.8",
        image: Sapphire,
        description: "Сапфіри - це корунди інших кольорів, окрім червоного (який називається рубінами). Сапфіри можуть бути синіми, жовтими, рожевими та іншими кольорами. Вони також використовуються в прикрасах і відзначаються яскравими кольорами та вишуканістю.",
    price: 800,
  },
  {
    mark: "Topaz",
    carat: "0.8",
    image: Topaz,
    description: "Топаз - це дорогоцінний камінь, який може мати різноманітні відтінки від блідо-голубого до глибокого синього, жовтого, рожевого або чисто білого. Його велика прозорість та блискучість роблять його популярним в прикрасах. Топаз також пов'язується з властивостями, які принесуть успіх та благополуччя своєму власнику.",
    price: 300,
},
{
    mark: "Shpinel",
    carat: "1.8",
    image: Shpinel,
    description: "Шпинель - це природний камінь, який може мати різноманітні кольори, включаючи червоний, рожевий, синій, фіолетовий та інші. Він характеризується своєю великою прозорістю та інтенсивністю кольорів. Шпинель часто використовується для виготовлення унікальних та елегантних прикрас, і його наявність може символізувати стійкість та розкош.",
    price: 500,
},
{
    mark: "Zirkon",
    carat: "1",
    image: Zirkon,
    description: "Циркон - це природний камінь, який може мати різноманітні відтінки, включаючи безбарвний, синій, жовтий, зелений та інші. Він славиться своєю великою блискучістю та чистотою. Циркон використовується як декоративний елемент у виготовленні прикрас і символізує вічність та красу.",
    price: 700,
},
];

export default function Items({ filter, searchTerm }) {
  const filteredData = filter
    ? data.filter(
      (item) =>
        item.carat === filter ||
        item.description === filter ||
        item.mark === filter
    )
    : data;

  const searchData = searchTerm
    ? filteredData.filter(
      (item) =>
        item.carat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mark.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : filteredData;

  return (
    <div className="container">
      <div style={styles.cardWrapper}>
        {searchData.map(({ mark, carat, image, description, price }, idx) => (
          <CardItem
            id={idx}
            mark={mark}
            carat={carat}
            imageSrc={image}
            description={description}
            price={price}
            viewButton={true}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
