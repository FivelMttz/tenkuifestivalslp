import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { obras as defaultObras, talleres as defaultTalleres, sedes as defaultSedes } from "@/data/events";
import type { Obra, Taller, Sede } from "@/data/events";

export interface EventImage {
  url: string;
  alt: string;
}

export interface ObraWithImages extends Obra {
  coverImage?: string;
  gallery?: EventImage[];
}

export interface TallerWithImages extends Taller {
  coverImage?: string;
  gallery?: EventImage[];
}

export interface SedeWithImages extends Sede {
  coverImage?: string;
  gallery?: EventImage[];
}

interface GlobalConfig {
  whatsappNumber: string;
  preventa1: { adulto: number; infancia: number; startDate: string };
  preventa2: { adulto: number; infancia: number; startDate: string };
}

interface EventContextType {
  obras: ObraWithImages[];
  talleres: TallerWithImages[];
  sedes: SedeWithImages[];
  config: GlobalConfig;
  heroImages: string[];
  setObras: (obras: ObraWithImages[]) => void;
  setTalleres: (talleres: TallerWithImages[]) => void;
  setSedes: (sedes: SedeWithImages[]) => void;
  setConfig: (config: GlobalConfig) => void;
  setHeroImages: (images: string[]) => void;
  updateObra: (slug: string, data: Partial<ObraWithImages>) => void;
  updateTaller: (slug: string, data: Partial<TallerWithImages>) => void;
  updateSede: (slug: string, data: Partial<SedeWithImages>) => void;
  exportData: () => any;
  importData: (data: any) => void;
}

const defaultConfig: GlobalConfig = {
  whatsappNumber: "524447027037",
  preventa1: { adulto: 120, infancia: 80, startDate: "2026-04-13" },
  preventa2: { adulto: 140, infancia: 100, startDate: "2026-04-24" },
};

const EventContext = createContext<EventContextType | null>(null);

export const useEvents = () => {
  const ctx = useContext(EventContext);
  if (!ctx) throw new Error("useEvents must be used within EventProvider");
  return ctx;
};

const STORAGE_KEY = "tenkui_admin_data";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function saveToStorage(data: any) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const stored = loadFromStorage();

  const [obras, setObras] = useState<ObraWithImages[]>(stored?.obras ?? defaultObras.map(o => ({ ...o })));
  const [talleres, setTalleres] = useState<TallerWithImages[]>(stored?.talleres ?? defaultTalleres.map(t => ({ ...t })));
  const [sedes, setSedes] = useState<SedeWithImages[]>(stored?.sedes ?? defaultSedes.map(s => ({ ...s })));
  const [config, setConfig] = useState<GlobalConfig>(stored?.config ?? defaultConfig);
  const [heroImages, setHeroImages] = useState<string[]>(stored?.heroImages ?? []);

  useEffect(() => {
    // Strip icon functions before saving (they can't be serialized)
    saveToStorage({ 
      obras: obras.map(({ icon, ...rest }) => rest),
      talleres: talleres.map(({ icon, ...rest }) => rest),
      sedes, 
      config, 
      heroImages 
    });
  }, [obras, talleres, sedes, config, heroImages]);

  const updateObra = (slug: string, data: Partial<ObraWithImages>) => {
    setObras(prev => prev.map(o => o.slug === slug ? { ...o, ...data } : o));
  };

  const updateTaller = (slug: string, data: Partial<TallerWithImages>) => {
    setTalleres(prev => prev.map(t => t.slug === slug ? { ...t, ...data } : t));
  };

  const updateSede = (slug: string, data: Partial<SedeWithImages>) => {
    setSedes(prev => prev.map(s => s.slug === slug ? { ...s, ...data } : s));
  };

  return (
    <EventContext.Provider value={{
      obras, talleres, sedes, config, heroImages,
      setObras, setTalleres, setSedes, setConfig, setHeroImages,
      updateObra, updateTaller, updateSede,
    }}>
      {children}
    </EventContext.Provider>
  );
};
