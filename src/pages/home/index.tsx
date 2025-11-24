import { useEffect, useState } from "react";
import { tmdb } from "../../services/api";
import CardConteudo from "../../components/card-conteudo";
import { Typography, Box } from "@mui/material";

interface Conteudo {
  id: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path?: string;
}

const Home = () => {
  const [filmes, setFilmes] = useState<Conteudo[]>([]);
  const [series, setSeries] = useState<Conteudo[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

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
        setErro(
          "Não foi possível carregar os lançamentos. Verifique sua conexão e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    }

    buscarConteudo();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          color: "#fff",
        }}
      >
        <Typography variant="h5">Carregando...</Typography>
      </Box>
    );
  }

  if (erro) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          color: "#ff4444",
        }}
      >
        <Typography variant="h6">{erro}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#040714",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          marginBottom: "2rem",
          fontWeight: 600,
        }}
      >
        Lançamentos de 2025
      </Typography>

      <Typography
        variant="h5"
        sx={{ color: "#fff", marginTop: "2rem", marginBottom: "1rem" }}
      >
        Filmes
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filmes.map((f) => (
          <CardConteudo
            key={f.id}
            titulo={f.title || ""}
            data={f.release_date}
            imagem={f.poster_path}
          />
        ))}
      </Box>

      <Typography
        variant="h5"
        sx={{ color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}
      >
        Séries
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
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
};

export default Home;