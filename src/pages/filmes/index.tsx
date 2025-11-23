import { useEffect, useState } from "react";
import { tmdb } from "../../services/api";
import CardConteudo from "../../components/card-conteudo";
import { Typography, Box } from "@mui/material";

interface Filme {
  id: number;
  title: string;
  release_date?: string;
  poster_path?: string;
}

const Filmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const response = await tmdb.get("/discover/movie", {
          params: { primary_release_year: 2025 },
        });
        setFilmes(response.data.results);
      } catch (erro) {
        console.error("Erro ao buscar filmes:", erro);
        setErro(
          "Não foi possível carregar os filmes. Verifique sua conexão e tente novamente."
        );
      } finally {
        setLoading(false);
      }
    }

    buscarFilmes();
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
        Lançamentos de Filmes 2025
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filmes.map((filme) => (
          <CardConteudo
            key={filme.id}
            titulo={filme.title}
            data={filme.release_date}
            imagem={filme.poster_path}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Filmes;
