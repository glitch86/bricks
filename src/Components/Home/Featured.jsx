"use client";
import { FaStar } from "react-icons/fa";
import LegoPersonCard from "../Cards/LegoPeopleCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/brickData.json") // public folder path
      .then((res) => {
        setPeople(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Bricks</h2>

      <div className="flex gap-4 overflow-x-auto flex-nowrap snap-x snap-mandatory scroll-smooth pb-4">
        {people.map((person) => (
          <LegoPersonCard key={person.id} person={person}></LegoPersonCard>
        ))}
      </div>
    </section>
  );
};

export default Featured;
