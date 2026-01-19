"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import LegoCommunityCard from "../Cards/LegoCommunityCard";

const CommunityShowcase = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/communityData.json")
      .then((res) => {
        setDatas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  console.log(datas);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="bg-base-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Community Creations
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {datas.map((item) => (
          <LegoCommunityCard key={item.id} item={item}></LegoCommunityCard>
        ))}
      </div>
    </section>
  );
};

export default CommunityShowcase;
