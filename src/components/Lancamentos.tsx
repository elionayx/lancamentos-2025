import { useEffect, useState } from "react";
import { tmdb } from "../services/api";
import { CardConteudo } from "./CardConteudo";
import { Typography, Box } from "@mui/material";

interface Conteudo {
  id: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path?: string;
}

export function Lancamentos() {
  const [filmes, setFilmes] = useState<Conteudo[]>([]);
  const [series, setSeries] = useState<Conteudo[]>([]);

  useEffect(() => {
    async function buscarConteudo() {
      try {
        const filmesResponse = await tmdb.get("/discover/movie", {
          params: { primary_release_year: 2025 },
        });

        const seriesResponse = await tmdb.get("/discover/tv", {
          params: { first_air_date_year: 2025 },
        });

        setFilmes(filmesResponse.data.results);
        setSeries(seriesResponse.data.results);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
      }
    }

    buscarConteudo();
  }, []);