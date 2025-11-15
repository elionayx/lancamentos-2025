import { useEffect, useState } from "react";
import { tmdb } from "../services/api";
import { CardConteudo } from "../components/CardConteudo";
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

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 600 }}>
        Lançamentos de 2025
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Filmes
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filmes.map((f) => (
          <CardConteudo
            key={f.id}
            titulo={f.title || ""}
            data={f.release_date}
            imagem={f.poster_path}
          />
        ))}
      </Box>

      <Typography variant="h5" sx={{ marginTop: 4 }}>
        Séries
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {series.map((s) => (
          <CardConteudo
            key={s.id}
            titulo={s.name || ""}
            data={s.first_air_date}
            imagem={s.poster_path}
          />
        ))}
      </Box>
    </Box>
  );
/*enviando o useState para loading*/ 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchData() {
    try {
      const response = await api.get("/character");
      setDados(response.data.results);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);

  import { CircularProgress, Box } from "@mui/material";

  if (loading) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
      <CircularProgress />
    </Box>
  );
}


}
