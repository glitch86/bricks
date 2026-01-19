"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import LegoPersonCard from "./Cards/LegoPeopleCard";

export default function LegoPeople() {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {people.map((person) => (
        <LegoPersonCard key={person.id} person={person}></LegoPersonCard>
      ))}
    </div>
  );
}
