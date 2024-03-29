"use client";

import { useState, useEffect } from "react";

import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Select from "@/Components/Select";
import styles from "./Map.module.scss";
import MapArea from "@/Components/Map/MapArea";

const preparePlacemarks = (items) => {
  return items.map((item, index) => {
    const title = item.find((field) => field.name === "title")?.value || "";
    const subtitle =
      item.find((field) => field.name === "subtitle")?.value || "";
    const address = item.find((field) => field.name === "address")?.value || "";
    const coords = item.find((field) => field.name === "coords")?.value || "";
    return {
      id: index,
      coords: coords,
      title: title,
      subtitle: subtitle,
      address: address,
    };
  });
};

const Map = ({ alias, fields }) => {
  const [placemarks, setPlacemarks] = useState([]);
  const [currentPlacemark, setCurrentPlacemark] = useState({});

  useEffect(() => {
    const items = fields.find((item) => item.name === "items")?.value || [];
    const placemarksTemp = preparePlacemarks(items);
    setPlacemarks(placemarksTemp);
    setCurrentPlacemark(placemarksTemp[0]);
  }, []);

  if (!placemarks.length) return;

  return (
    <section id={alias} className={styles.map}>
      <Container size="XL">
        <div className={styles.map__wrapper}>
          <MapArea
            currentPlacemark={currentPlacemark}
            Placemarks={placemarks}
          />
          <div className={styles.map__content}>
            <Select onChange={setCurrentPlacemark} childrens={placemarks} />
            <div className={styles.map__info}>
              <p className={styles.map__title}>{currentPlacemark?.title}</p>
              <p className={styles.map__subtitle}>
                {currentPlacemark?.subtitle}
              </p>
              <p className={styles.map__text}>{currentPlacemark?.address}</p>
            </div>
            <Button
              className={styles.map__btn}
              size="l"
              variant="blue"
              label="Выбрать"
              icon="arrow"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Map;
