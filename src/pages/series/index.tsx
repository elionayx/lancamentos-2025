import { useEffect, useState } from "react";
import { tmdb } from "../../services/api";
import CardConteudo from "../../components/card-conteudo";
import { Typography, Box } from "@mui/material";

interface Serie {
  id: number;
  name: string;
  first_air_date?: string;
  poster_path?: string;
}

const Series = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function buscarSeries() {
      try {
        const response = await tmdb.get("/discover/tv", {
          params: { first_air_date_year: 2025 },
        });
        setSeries(response.data.results);
      } catch (erro) {
        console.error("Erro ao buscar séries:", erro);
        setErro(
          "Não foi possível carregar as séries. Verifique sua conexão e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    }

    buscarSeries();
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
        Lançamentos de Séries 2025
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {series.map((serie) => (
          <CardConteudo
            key={serie.id}
            titulo={serie.name}
            data={serie.first_air_date}
            imagem={serie.poster_path}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Series;