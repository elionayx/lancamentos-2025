import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {
  titulo: string;
  data?: string;
  imagem?: string;
}

const CardConteudo = ({ titulo, data, imagem }: CardProps) => {
  return (
    <Card
      sx={{
        width: 200,
        backgroundColor: "#1a1a2e",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
        }
      }}
    >
      {imagem && (
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w200${imagem}`}
          alt={titulo}
          sx={{ borderRadius: "12px 12px 0 0" }}
        />
      )}
      <CardContent sx={{ padding: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#1f80e0",
            fontSize: "1rem",
            marginBottom: "0.5rem"
          }}
        >
          {titulo}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#b0b0b0" }}
        >
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardConteudo;