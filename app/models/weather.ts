"use client"

export interface CurrentWeather {
    city: string;
    country: string;
    temperature: number;
    description: string;
    icon: string;
}

export interface Forecast {
    date: string;
    temperature: number;
    description: string;
    icon: string;
}