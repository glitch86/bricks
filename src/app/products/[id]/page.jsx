"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Details = () => {
  const { id } = useParams(); 
  const router = useRouter();

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/brickData.json")
      .then((res) => {
        const found = res.data.find((p) => p.id === id);
        setPerson(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!person) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-semibold">Person not found 😢</p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => router.push("/people")}
        >
          Back to Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Back button */}
      <Link href="/products" className="btn btn-ghost mb-6">
        &larr; Back to Collection
      </Link>

      <div className="card lg:card-side bg-base-200 shadow-xl">
        {/* Image */}
        <figure className="lg:w-1/2 bg-base-300 flex items-center justify-center">
          <img
            src={person.imageUrl}
            alt={person.name}
            className="w-full h-full object-contain p-6"
          />
        </figure>

        {/* Details */}
        <div className="card-body flex flex-col">
          <h1 className="text-4xl font-bold">{person.name}</h1>
          <span className="badge badge-primary w-fit mt-2">{person.role}</span>

          <p className="mt-4 text-base-content/80">{person.description}</p>

          <div className="divider"></div>

          <div className="flex gap-8 flex-wrap">
            <p>
              <strong>Age:</strong> {person.age}
            </p>
            <div>
              <strong>Accessories:</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {person.accessories.map((item, index) => (
                  <span key={index} className="badge badge-outline">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="card-actions mt-6">
            <button className="btn btn-primary">Add to Collection</button>
            <button className="btn btn-outline">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
