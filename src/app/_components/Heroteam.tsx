"use client"

import { api } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Heroteam = () => {
    const [teams, setTeams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            async function getData() {
                const res = await api.get("/api/teams?populate=*");
                setTeams(res.data.data);
                setLoading(false);
            }
            getData();
        } catch (error) {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="min-h-fit w-full p-8 bg-gradient-to-tr from-blue-500 to-blue-700 py-16 text-white py32 md:px-16">
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="min-h-96">
                            <div className="relative h-96 w-full bg-gray-300 animate-pulse -lg"></div>
                            <div className="flex flex-col border-none gap-4 p-4">
                                <div className="h-6 w-3/4 bg-gray-300 animate-pulse "></div>
                                <div className="h-4 w-1/2 bg-gray-300 animate-pulse "></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-fit w-full p-8 bg-gradient-to-tr from-blue-500 to-blue-700 py-16 text-white py32 md:px-16">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {teams.map((team: any) => (
                    <div key={team.id} className="min-h-96">
                        <div className="relative h-96 w-full">
                            <Image
                                src={team.profile.url}
                                alt={team.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col border-none gap-4 p-4">
                            <h2 className="text-xl font-semibold">{team.name}</h2>
                            <p className="text-blue-100">{team.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Heroteam;